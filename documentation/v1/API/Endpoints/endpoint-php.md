---
sidebar_position: 2
---

# endpoint.php

The `endpoint.php` file is the base class for all endpoints. It is located in the `src` directory of the API. It is an abstract class, not to be used directly.

The `endpoint.php` file contains the `Endpoint` class. This class is extended by all endpoints.

## Variables

The `Endpoint` class contains the following variables:
- `$data` - The data to be returned by the endpoint.
- `$sql` - The SQL query to be executed.
- `$sqlParams` - The parameters to be passed to the SQL query.

## Methods

The `Endpoint` class contains the following methods:
- `__construct()` - The constructor for the `Endpoint` class. This initialises the database, the SQL and the SQL parameters.
  - We use the DB method `executeSQL()` to insert the SQL and SQL parameters into the `$data` variable.
  - Finally, we use the `setData()` method to create a response.
- `setSQL()` - This method is used to set the SQL query.
- `setSQLParams()` - This method is used to set the SQL parameters.
- `initialiseSQL()` - This method is used to initialise the SQL query and SQL parameters.
- `setData()` - This method is used to set the data to be returned by the endpoint.
- `getData()` - This method is used to get the data to be returned by the endpoint.
- `endpointParams()` - This method creates an empty array to hold the endpoint parameters.
- `validateParams()` - This method validates the endpoint parameters and sends an HTTP 400 response if the parameters are invalid.

## Authors

This method was created by [John Rooksby](https://github.com/johnrooksby) and updated and used by [Tom Shaw](https://github.com/tomshaw650) for the assignment.