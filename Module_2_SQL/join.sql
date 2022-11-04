-- JOINS --
-- : ARE TOOLS THAT ARE USED TO ACESS DATA FROM ONE OR TWO TABLES WITH THE HELP OF COMMON ATTRIBUTE(primary key)

--  In sql there are 4 types Of joins
    
--      1.FOR COMMON DATA OR FOR INTERSECTION
--             INNER JOIN

--      2.LEFT TABLE DATA
--              LEFT OUTER JOIN

--      3.RIGHT TABLE DATA
--              RIGHT OUTER JOIN

        THIS ONE IS NOT AVAILABLE IN MYSQL
--      4.BOTH TABLES DATA
---------------------------------------------------------------------------------------------------------------------------
CREATE TABLE DEPARTMENT
(
     
    DEPTNAME VARCHAR(15) UNIQUE,
    LOCATION VARCHAR(33) NOT NULL
);

INSERT INTO department VALUES
	(10,'FINANCE','EDINBURGH'),
    (20,'SOFTWARE','PADINGTON'),
    (30,'SALES','MAIDSTONE'),
    (40,'MARKETING','DARLINGTON'),
    (50,'ADMIN','BIRMINGHAM')
;

---------------------------------------
-- INNER JOIN --
SELECT * FROM DEPARTMENT
INNER JOIN employee ON
employee.DEPTCODE = department.DEPTCODE;

--for getting result in desred order columnnwise
SELECT employee.DEPTCODE , EMPOYEE.EMPFNAME, DEPARTMENT.LOCATION,DEPARTMENT.DEPTNAME FROM DEPARTMENT
INNER JOIN employee ON
employee.DEPTCODE = department.DEPTCODE;

-- LEFT JOIN -- LEFT TABLE PLUS INTERSECTION TOO WILL COME
SELECT employee.DEPTCODE AS DEPofEMP, employee.EMPFNAME , department.DEPTCODE , department.LOCATION
FROM department
LEFT JOIN employee ON
employee.DEPTCODE = department.DEPTCODE;

-- RIGHT JOIN -- 
SELECT  employee.DEPTCODE AS DEPofEMP, employee.EMPFNAME , department.DEPTCODE , department.LOCATION
FROM employee
RIGHT JOIN department
ON employee.DEPTCODE = department.DEPTCODE;


--full outer join---
--LEFT JOIN--
SELECT employee.DEPTCODE AS DEPofEMP,  department.DEPTCODE,employee.EMPFNAME  , department.LOCATION
FROM department
LEFT JOIN employee ON
employee.DEPTCODE = department.DEPTCODE
UNION
-- RIGHT JOIN -- 
SELECT  employee.DEPTCODE AS DEPofEMP,  department.DEPTCODE,employee.EMPFNAME , department.LOCATION
FROM employee
RIGHT JOIN department
ON employee.DEPTCODE = department.DEPTCODE;

