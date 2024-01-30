---
id: SQL
aliases:
  - BASICS
tags: []
---

### BASICS
#### CREATE
#### READ
#### UPDATE
```UPDATE table SET column = value;```

#### DELETE

### UNION
In SQL, the UNION operator is used to combine the result sets of two or more SELECT statements. It removes duplicate rows between the various SELECT statements. The syntax for using the UNION operator is as follows:

```sql
SELECT column1, column2, ...
FROM table1
WHERE condition;

UNION

SELECT column1, column2, ...
FROM table2
WHERE condition;
```

Here, each SELECT statement within the UNION must have the same number of columns in the result sets with similar data types. The UNION operator will merge the results, eliminating duplicate rows from the final result set.

It's worth noting that if you want to include duplicate rows, you can use the UNION ALL operator instead of UNION.
