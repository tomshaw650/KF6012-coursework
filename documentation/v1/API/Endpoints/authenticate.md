# authenticate.php

[Link to Authenticate endpoint in production](http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/auth) NOTE: This endpoint can only be interacted with through a POST request, and is better viewed through the React App.

The `authenticate.php` file is the class used for authentication. It is located in the `src` directory of the API.

The `authenticate.php` file contains the `Authenticate` class, and extends the [`Endpoint`](/v1/API/Endpoints/endpoint). The `Authenticate` class is used to authenticate the user for the React App.

## Methods

The `Authenticate` class contains the following methods:

- `initialiseSQL()` - The main function for the `Authenticate` class. Inherited from the [`Endpoint`](/v1/API/Endpoints/endpoint) class to execute an SQL query.
  - `$sql` is set to the SQL query to get all the relevant user account data
  - `setSQL()` is called to set the SQL query.
  - `setSQLParams()` is called to set the username as an SQL parameter.
- `validateRequestMethod()` - Validates the request method is a POST request.
- `validateAuthParameters()` - Validates the parameters are set in the request.
- `validateUsername()` - Validates the username is in the database.
- `validatePassword()` - Validates the password is correct.
- `createJWT()` - Creates a JWT token for the user, using the `FirebaseJWT\JWT` class.

## Authors

The `Authenticate` class was created by [Tom Shaw](https://github.com/tomshaw650) and [John Rooksby](https://github.com/johnrooksby), using third party code to create a JWT from [Firebase](https://github.com/firebase/php-jwt)
