DataBase - is known as specialized software for storing structured Data
         - for rapid record ,write,update and delete
         - is used to reduce Data redundancy(dublicacy) 
         - To mantain data consistency
         - Database security 
         - It enforces standard to maintain data Integrity - 
            for Eg-password should be alphanumberic or characters not more than 4.

RDBMS - Relational Database Management System.
(For eg-To manage data in a table form is known as RDBMS)
        
        RELATION = TABLE.
        ATTRIBUTE = COLUMNS.
        TUPLES = ROWS. 
        DEGREE = NUMBER OF ATTRIBUTES(COLUMNS).

SQL = Set of Rules and Feature
      A Language needs to make RDBMS 
  
SQL is being build on some sub Languages such as..

  1.DDL - Data Defination Language(for changing table)
        -create 
        -drop(table removal)
        -alter(for changing table)

  2.DML - Data Manipulation Language(Content change karna)
        -insert
        -update
        -delete(row deletion)

  3.DQL - Data Query Language(for searching content)
        -select
        
  4.DCL - Data Control Language(to handle DataBase access control)
        -access

  5.TCL - Transactional control Language(rollback,commit)

  ____--------------------------------------------------------------------------
  SQL DATA TYPES AND CONSTRAINTS
  DataBase for a company
      (CUSTOMER)(EMPLOYEE)(DEPARTMENTS)(PRODUCTS)(PURCHASES)

      SYNTAX -
             CREATE TABLE emp(
                  ID INTEGER AUTO_INCREMENT UNIQUE,
                  NAME VARCHAR(255) NOT NULL,
                  PHNO BIGINT UNIQUE,
                  SALARY FLOAT NOT NULL CHECK (SALARY>2500),
                  DEPARTMENT VARCHAR(255),
                  AGE INTEGER DEFAULT 5
            );
------------------------------------------------------------------------\
