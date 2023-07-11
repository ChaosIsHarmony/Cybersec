#!/bin/bash
# usage: ./checkDiff.sh <default> <other>

# default document
default=$1
# the document under investigation
other=$2

diff $default $other > diff.txt
