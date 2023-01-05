# createaccount.php

[Link to Create Account endpoint in production](http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/createaccount) NOTE: This endpoint can only be interacted with through a POST request, and is better viewed through the React App.

The `createaccount.php` file is the class used for creating an account. It is located in the `src` directory of the API.

The `createaccount.php` file contains the `CreateAccount` class, and extends the [`Endpoint`](/v1/API/Endpoints/endpoint). The `CreateAccount` class is used to create an account for the React App.

## Methods

The `CreateAccount` class contains the following methods:

- `initialiseSQL()` - The main function for the `CreateAccount` class. Inherited from the [`Endpoint`](/v1/API/Endpoints/endpoint) class to execute an SQL query.
  - `$sql` is set to the SQL query to create a new user account
  - `setSQL()` is called to set the SQL query.
  - `setSQLParams()` is called to set the name, username, and password as SQL parameters.
- `validateRequestMethod()` - Validates the request method is a POST request.
- `validateUsername()` - Takes the posted username and checks if it is already in the database.

## Examples

A POST request to the `CreateAccount` endpoint with the following data:

- `name` - The name of the user
- `username` - The username of the user
- `password` - The password of the user

Will provide the following response:

```json
{
  "length": 1,
  "message": "account created!",
  "data": []
}
```

## HTTP Status Codes

The `CreateAccount` endpoint can return 201, 405 or 500 status codes.

## Authors

The `CreateAccount` class was created by [Tom Shaw](https://github.com/tomshaw650).
