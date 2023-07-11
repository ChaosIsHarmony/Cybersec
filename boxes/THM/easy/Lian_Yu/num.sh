#! /bin/bash

set -B

for i in {2000..3000};
do
	curl http://10.10.42.150/island/$i > curlResult.txt
	grep 404 curlResult.txt
	if [ $? -ne 0 ]; then
		echo $i
		exit 0
	fi
done
