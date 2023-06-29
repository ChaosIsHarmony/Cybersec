# !/bin/bash
# Takes a base URL + a list of directories + a list of greppable terms + list of terms to exclude
#
# Process:
#	1. curl [base + directory] > tmpSrc.txt
#	2. grep [for term in list] >> srcGrepResults.txt
#	3. repeat until all elements have been examined
#
url_base=$1
dir_list=$2
grep_list=$3
grep_exclude_list=$4

while IFS= read -r dir; do
	echo "________________________________\n____________________________\n$url_base$dir\n" >> srcGrepResults.txt 
	# get source code, look for term from text not including excluded terms, remove initial whitespace, store results
	curl $url_base$dir | grep -vFf $grep_exclude_list | grep -i -f $grep_list | awk '{$1=$1; print}' >> srcGrepResults.txt
	echo "\n\n" >> srcGrepResults.txt
done < $dir_list

