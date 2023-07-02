#!/bin/bash
#
# When you have a list of files you need to look for,
# this script will locate and look for particular details (customizable).
#
# All results are save in a directory created where the script is run.
#
#
# Usage: ./file_parser.sh fileList

fileList=$1

# locate files & get details about each
mkdir file_details

while IFS= read -r filename; do
	location=$(find / -name $filename 2>/dev/null)
	saveFilepath="file_details/_$filename"
	touch $saveFilepath

	# Name the file
	echo "_____________________________________" >> $saveFilepath
	echo $location >> $saveFilepath
	echo "" >> $saveFilepath
	
        # Determine permissions and basic info
	echo "------" >> $saveFilepath
	echo "BASIC INFO" >> $saveFilepath
        ls -la $location >> $saveFilepath
	echo "" >> $saveFilepath

	# Find IPv4 addresses, passwords
	echo "------" >> $saveFilepath
	echo "SENSITIVE INFO" >> $saveFilepath
        cat $location | grep -E "([0-9]{1,3}[\.]){3}[0-9]{1,3}" >> $saveFilepath
	cat $location | grep -E "(pass(word|wd)?|passwd)" >> $saveFilepath
	echo "" >> $saveFilepath
	echo "" >> $saveFilepath
done < $fileList
