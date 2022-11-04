CREATE TABLE EMPLOYEE(
    -- UNIQUE AND NOT NULL ADD KARNA
    EMPCODE INT(4),
    EMPFNAME VARCHAR(20),
    EMPLNAME VARCHAR(20),
    JOB VARCHAR(50) NOT NULL,
    -- CORRECT CHAR TO INT
    MANAGER CHAR(4),
    HIREDATE DATE NOT NULL,
    -- SALARY DATATYPE ADD
    SALARY INT(6) NOT NULL,
    COMISSION INT(10),
    DEPTCODE INT(3)NOT NULL
    --EMAIL  
);

--ALTER COMMAND - IS USED WHEN U HAVE MADE MISTAKES WHILE CREATING TABLES 
-- COLUMNS -> add, remove , rename
       --ADD
            --(ADD COLUMN)
                ALTER TABLE employee 
                    ADD COLUMN EMAIL VARCHAR(50) NOT NULL;
            -- ADD COLUMN AFTER
        
                ALTER TABLE employee
                    ADD COLUMN dob DATE
                    AFTER EMPLNAME; 
            --ADD COLUMN FIRST
                --ADDS COLUMN AT TOP FIRST
                ALTER TABLE employee
                    ADD COLUMN MANAGERFNAME VARCHAR(40)
                    FIRST ;
        --REMOVE
                    ALTER TABLE employee
                    DROP COLUMN MANAGERFNAME;
                ALTER TABLE employee
                DROP COLUMN dob;
            -- MULTIPLE REMOVE
                ALTER TABLE EMPLOYEE 
                DROP COLUMN dobDROP
                DROP COLUMN MANAGERFNAME;
        --RENAME COLUMN
            ALTER TABLE employee
            CHANGE COLUMN JOB DESIGNATION VARCHAR(50) NOT NULL;

-- CONSTRAINTS -> TO ADD CONSTRAINTS SYNTAX
-- ADD,REMOVE,MODIFY
    --ADD
    ALTER TABLE EMPLOYEE
    CHANGE COLUMN EMPCODE EMPCODE INT(4)UNIQUE  NOT NULL;

    ALTER TABLE EMPLOYEE
    CHANGE COLUMN SALARY SALARY FLOAT;

    --REMOVE
    ALTER TABLE EMPLOYEE
    CHANGE COLUMN DEPTCODE DEPTCODE INT(3);
---------------------------------------------------------------------------------------------------------------------
--INSERT
    INSERT INTO EMPLOYEE  
VALUES (9369, 'TONY', 'STARK', 'SOFTWARE ENGINEER', 7902, '1980-12-17', 2800,0,20,"abc@gmail.com"),
       (9499, 'TIM', 'ADOLF', 'SALESMAN', 7698, '1981-02-20', 1600, 300,30,"abc@gmail.com"),    
       (9566, 'KIM', 'JARVIS', 'MANAGER', 7839, '1981-04-02', 3570,0,20,"abc@gmail.com"),
       (9654, 'SAM', 'MILES', 'SALESMAN', 7698, '1981-09-28', 1250, 1400, 30,"abc@gmail.com"),
       (9782, 'KEVIN', 'HILL', 'MANAGER', 7839, '1981-06-09', 2940,0,10,"abc@gmail.com"),
       (9788, 'CONNIE', 'SMITH', 'ANALYST', 7566, '1982-12-09', 3000,0,20,"abc@gmail.com"),
       (9839, 'ALFRED', 'KINSLEY', 'PRESIDENT', 7566, '1981-11-17', 5000,0, 10,"abc@gmail.com"),
       (9844, 'PAUL', 'TIMOTHY', 'SALESMAN', 7698, '1981-09-08', 1500,0,30,"abc@gmail.com"),
       (9876, 'JOHN', 'ASGHAR', 'SOFTWARE ENGINEER', 7788, '1983-01-12',3100,0,20,"abc@gmail.com"),
       (9900, 'ROSE', 'SUMMERS', 'TECHNICAL LEAD', 7698, '1981-12-03', 2950,0, 20,"abc@gmail.com"),
       (9902, 'ANDREW', 'FAULKNER', 'ANAYLYST', 7566, '1981-12-03', 3000,0, 10,"abc@gmail.com"),
       (9934, 'KAREN', 'MATTHEWS', 'SOFTWARE ENGINEER', 7782, '1982-01-23', 3300,0,20,"abc@gmail.com"),
       (9591, 'WENDY', 'SHAWN', 'SALESMAN', 7698, '1981-02-22', 500,0,30,"abc@gmail.com"),
       (9698, 'BELLA', 'SWAN', 'MANAGER', 7839, '1981-05-01', 3420, 0,30,"abc@gmail.com"),
       (9777, 'MADII', 'HIMBURY', 'ANALYST', 7839, '1981-05-01', 2000, 200, NULL,"abc@gmail.com"),
       (9860, 'ATHENA', 'WILSON', 'ANALYST', 7839, '1992-06-21', 7000, 100, 50,"abc@gmail.com"),
       (9861, 'JENNIFER', 'HUETTE', 'ANALYST', 7839, '1996-07-01', 5000, 100, 50,"abc@gmail.com");

--SELECT (DATA QUERY LANGUAGE)
    --SYNTAX FOR MULTIPLE COLUMNS
        -- SELECT COLUMN1,COLUMN2 FROM tableName;
    SELECT EMPFNAME,EMPCODE,EMPLNAME FROM EMPLOYEE;
    --SYNTAX FOR SELECTING EVERYTHING
        -- SELECT * FROM tableName
     SELECT * FROM EMPLOYEE;
     
     --CLAUSES
       -- WHERE(FOR PUTTING CONDITIONS)
       -- ORDER BY
       -- GROUPBY
       -- HAVING

        --SYNTAX
        SELECT * FROM EMPLOYEE
        WHERE SALARY > 2800;
        --OPERATORS:
                --COMPARISON : =,>,<,
            

