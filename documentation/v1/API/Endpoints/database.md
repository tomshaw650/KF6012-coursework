---
sidebar_position: 3
---

# database.php

The `database.php` file is the base class for all database endpoints. It is located in the `src` directory of the API.

The `database.php` file contains the `Database` class. It is used to connect to the database and to prepare and execute queries.

## What is the database?

The database is an SQLite database containing tables relating to the CHI PLAY 2021 conference. The database is located in the `db` directory of the API.

## Variables

The `Database` class contains the following variables:
- `$dbConnection` - This variable is used to hold the database connection.

## Methods

The `Database` class contains the following methods:
- `__construct()` - This method is used to connect to the database. It takes the `$dbName` as a parameter and calls the `setDbConnection()` method.
- `setDbConnection()` - This method is used to set the database connection using PDO. It takes the `$dbName` as a parameter and connects to the database. A try/catch expression is used to output a message if the connection fails.
- `executeSQL()` - This method is used to execute a SQL query. It takes `$sql` and `$params` as parameters and prepares and executes the query. It returns a `PDOStatement::fetchAll()` array.

## Authors

This method was created by [John Rooksby](https://github.com/johnrooksby) and used by [Tom Shaw](https://github.com/tomshaw650) for the assignment.