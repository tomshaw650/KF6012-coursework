# base.php

[Link to Base endpoint in production](http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/)

The `base.php` file is the class used for the base endpoint of the API. It is located in the `src` directory of the API.

The `base.php` file contains the `Base` class, and extends the [`Endpoint`](/v1/API/Endpoints/endpoint).

## Variables

The `Base` class contains the following variables:

- `$sql` - This variable is used to hold the SQL query for the conference name.

## Methods

The `Base` class contains the following methods:

- `__construct()` - This method is used to initialise the `$db`, execute the SQL query and create several arrays to output JSON data in a proper format.
  - `setData()` - This method is used to set the data for the endpoint. It sets a length based on data passed in, a message containing "success" and the data itself.

## Arrays

The `Base` class contains the following arrays:

- `$details` - This array holds my information. My first name, Last name and Northumbria University Student ID is contained within this array.
- `$docs` - This array holds the documentation for the API. It contains the URL for the documentation.
- `$conference` - This array accesses the `$sql` variable and holds the conference name.
- `$base` - This array holds the `$details`, `$docs` and `$conference` arrays, to be used in the `setData()` method.

## Authors

This endpoint was created by [Tom Shaw](https://github.com/tomshaw650)
