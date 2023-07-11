#!/bin/python3

import os
import sys

if __name__ == "__main__":
    print(sys.argv[1])
    with open(sys.argv[1]) as f:
        contents = f.read()

    contentsList = contents.split('\n')
    reassembledStr = ""

    startInd = contentsList.index("          ") + 2

    for token in contentsList[startInd:]:
        if token.strip() == "":
            reassembledStr += '\n'
        else:
            reassembledStr += token

    with open(sys.argv[2], 'w') as f2:
        f2.write(reassembledStr)
