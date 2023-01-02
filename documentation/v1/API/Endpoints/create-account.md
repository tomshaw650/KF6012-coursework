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

## Authors

The `CreateAccount` class was created by [Tom Shaw](https://github.com/tomshaw650).
