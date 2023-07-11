#!/bin/bash
#

tool=$1

mkdir $tool

tgpt "You are a skilled pedagogue who could teach computer science to anyone regardless of experience level. You are very good at using simple explanations to distill the most important concepts of any topic. You are tasked to provide a cheat sheet or synopsis of $tool with examples for up to the 20 most commonly used flags or switches. The format should first start with an example of the target usage and then a brief explanation of each of the component parts of the command." > tmp.txt

./gpt_response_formatter.py tmp.txt "$tool/${tool}_gpt.txt"

rm tmp.txt
