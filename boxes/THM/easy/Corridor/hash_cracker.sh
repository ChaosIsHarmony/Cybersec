#!/bin/bash

# Prompt the user to enter the file path
echo "Enter the path to the file:"
read file_path

# Check if the file exists
if [ -f "$file_path" ]; then
  # Read and process each line in the file
  while IFS= read -r line; do
    echo "Processing line: $line"
    hashcat -a 0 -m 0 $line /usr/share/wordlists/rockyou.txt
  done < "$file_path"
else
  echo "File not found."
fi
