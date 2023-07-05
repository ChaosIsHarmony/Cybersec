#!/bin/bash

for ((i=0; i<100; i++)); do
	curl http://10.10.159.14/th1s_1s_h1dd3n/?secret=$i
done
