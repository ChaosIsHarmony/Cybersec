#!/bin/bash
# Takes a base URL + a list of directories + a list of greppable terms + list of terms to exclude
#
# Process:
#	1. curl [base + directory] > tmpSrc.txt
#	2. grep [for term in list] >> srcGrepResults.txt
#	3. repeat until all elements have been examined
#
# TODO:
#  Look for comments based on extension to avoid false positives
#  	e.g., '#' is not a comment in .css and will lead to lots of hex values of colors being displayed
url_base=$1
dir_list=$2
grep_list=$3
grep_exclude_list=$4

touch srcGrepResults.txt

while IFS= read -r dir; do
	printf "________________________________\n____________________________\n%s%s\n" $url_base $dir >> srcGrepResults.txt 
	# get source code, look for term from text not including excluded terms, remove initial whitespace, store results
	curl $url_base$dir | grep -vFf $grep_exclude_list | grep -i -f $grep_list | awk '{$1=$1; print}' >> srcGrepResults.txt
	# check for comments
	if [[ "$dir" == ".css"* || "$dir" == ".js"* || "$dir" == ".c"* || "$dir" == ".cpp"* || "$dir" == ".java"* ]]; then 
		curl $url_base$dir | grep -i -F -e "//" -e "/*" | awk '{$1=$1; print}' >> srcGrepResults.txt
	elif [[ "$dir" == ".html"* ]]; then 
		curl $url_base$dir | grep -i -F "<!--" | awk '{$1=$1; print}' >> srcGrepResults.txt
	elif [[ "$dir" == ".py"* ]]; then 
		curl $url_base$dir | grep -i -F "#" | awk '{$1=$1; print}' >> srcGrepResults.txt
	fi

	printf "\n\n" >> srcGrepResults.txt
done < $dir_list

