---
sidebar_position: 4
---

# clienterror.php

[Link to ClientError endpoint in production](http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/clienterror)

The `clienterror.php` file is the base class for all client error endpoints. It is located in the `src` directory of the API.

The `clienterror.php` file contains the `ClientError` class, and extends the [`Endpoint`](/v1/API/Endpoints/endpoint-php) class. It is called when a GET request fails.

## Methods

The `ClientError` class contains the following methods:
- `__construct()` - The constructor for the `ClientError` class. This uses the `setData()` method from the [`Endpoint`](/v1/API/Endpoints/endpoint-php) class to create a response.
  - The response has a status code of 400 and allows for a message to be set when initialised.
  - The `$data` is set to null.
  - The `$length` is set to 0.

## Authors

This method was created by [John Rooksby](https://github.com/johnrooksby) and used by [Tom Shaw](https://github.com/tomshaw650) for the assignment.