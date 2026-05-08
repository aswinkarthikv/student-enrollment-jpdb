# Student Enrollment Form using JsonPowerDB

## Description
This is a micro-project that implements a Student Enrollment Form. The application is built using HTML, Bootstrap, and JavaScript, and it uses **JsonPowerDB (JPDB)** as the backend database to store student records. 

The form allows users to enter student details: Roll No, Full Name, Class, Birth Date, Address, and Enrollment Date. The primary key used for the form is the **Roll No**. 
- If a Roll No doesn't exist in the database, the user can save a new record. 
- If a Roll No already exists, the form automatically fetches and populates the details, allowing the user to update the existing record.

## Benefits of using JsonPowerDB
JsonPowerDB is a real-time, High Performance, Lightweight and Simple to Use, Rest API based Multi-mode DBMS. JsonPowerDB has ready to use API for Json document DB, RDBMS, Key-value DB, GeoSpatial DB and Time Series DB functionality. JPDB supports and advocates for true serverless and plug-and-play architecture - you can use API to save and read data directly from the frontend without the need for middle-tier servers.
- **Simplest way to retrieve data in a JSON format.**
- **Schema-free, Simple to use, Nimble and In-Memory database.**
- **It is built on top of one of the fastest and enterprise-grade real-time data ingestion and processing engines.**
- **Enables developers to build faster, simpler, and more efficient serverless applications.**
- **Reduces boilerplate code and accelerates development.**

## Release History
- **v1.0.0 (Current)**: Initial release of the Student Enrollment Form with Save, Update, and Reset functionality using JPDB.

## Table of Contents
1. [Description](#description)
2. [Benefits of using JsonPowerDB](#benefits-of-using-jsonpowerdb)
3. [Scope of functionalities](#scope-of-functionalities)
4. [Examples of use](#examples-of-use)
5. [Project status](#project-status)
6. [Sources](#sources)

## Scope of functionalities
- **Create**: Add new student enrollment details.
- **Read**: Automatically retrieve student data based on Roll No.
- **Update**: Modify details of existing students.
- **Validation**: Enforces strict data entry (no empty fields are allowed before submission).

## Examples of use
1. Enter `101` in the **Roll No** field.
2. If `101` doesn't exist, fill out the rest of the form (Full Name, Class, etc.) and click **Save**.
3. To update, enter `101` again in the **Roll No** field. The form will load the previously saved data. Update the fields and click **Update**.
4. Use the **Reset** button at any time to clear the form.

## Project status
- Completed and functioning successfully. Ready to be used for basic student enrollment management.

## Sources
- JsonPowerDB Documentation: [https://login2explore.com/](https://login2explore.com/)
- Bootstrap Framework: [https://getbootstrap.com/](https://getbootstrap.com/)
