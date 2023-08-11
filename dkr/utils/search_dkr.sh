#!/bin/bash
#
# Search through the Dynamic Knowledge Repository for info related to a target tool
#
# Usage: utils/search_dkr.sh <tool> <keyword> <context>

tool=$1
keyword=$2
context=$3

printf "___________________\n"
printf "%s_gpt.txt\n" $tool
grep -i -C $context -n $keyword "$tool/${tool}_gpt.txt"

printf "___________________\n"
printf "tldr\n"
tldr $tool | grep -i -C $context $keyword

printf "___________________\n"
printf "help\n"
$tool --help | grep -i -C $context $keyword

printf "___________________\n"
printf "man\n"
man $tool | grep -i -C $context $keyword
