#!/bin/bash
#
# Search through the Dynamic Knowledge Repository for info related to a target tool
#
# Usage: ./search_dkr.sh <tool> <keyword>

tool=$1
keyword=$2

printf "___________________\n"
printf "%s_gpt.txt\n" $tool
grep -i -C 2 -n $keyword "$tool/${tool}_gpt.txt"

printf "___________________\n"
printf "tldr\n"
tldr $tool | grep -i -C 2 $keyword

printf "___________________\n"
printf "help\n"
$tool --help | grep -i -C 2 $keyword

printf "___________________\n"
printf "man\n"
man $tool | grep -i -C 2 $keyword
