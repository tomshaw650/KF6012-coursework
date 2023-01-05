# update.php

[Link to Update endpoint in production](http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/update) NOTE: This endpoint can only be interacted with through a POST request and with a JWT, and is better interfaced through the React App.

The `update.php` file is the class used for updating the Database. It is located in the `src` directory of the API.

The `update.php` file contains the `Update` class, and extends the [`Endpoint`](/v1/API/Endpoints/endpoint). The `Update` class is used to update the award status of a paper.

## Methods

The `Update` class contains the following methods:

- `validateRequestMethod()` - Validates the request method is a POST request.
- `validateToken()` - Gets the JWT from the bearer token and checks it is valid.
- `validateUpdateParameters()` - Validates the `award` and `paper_id` parameters are set in the request.
- `initialiseSQL()` - sets the SQL query to update the award status of a paper, and executes it.

## Examples

A POST request to the `Update` endpoint with the following data:

- `has_award` - The award status of the paper
- `paper_id` - The ID of the paper
- A valid JWT in the `Authorization` header

Will provide the following response:

```json
{
  "length": 0,
  "message": "Success",
  "data": []
}
```

A GET request to the `Update` endpoint will provide the following response:

```json
{
  "length": 0,
  "message": "Invalid Request Method",
  "data": null
}
```

## HTTP Status Codes

The `Update` endpoint can return 200, 400, 401, 405 HTTP status codes.

## Authors

The `Update` class was created by [Tom Shaw](https://github.com/tomshaw650) and [John Rooksby](https://github.com/johnrooksby), using third party code to create a JWT from [Firebase](https://github.com/firebase/php-jwt)
