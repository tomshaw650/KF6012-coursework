# author.php

[Link to Author endpoint in production](http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/author)

The `author.php` file is the class used for the author endpoint of the API. It is located in the `src` directory of the API.

The `author.php` file contains the `Author` class, and extends the [`Endpoint`](/v1/API/Endpoints/endpoint). The `Author` class is used to return all authors from the database.

## Methods

The `Author` class contains the following methods:

- `initialiseSQL()` - The main function for the `Author` class. Inherited from the [`Endpoint`](/v1/API/Endpoints/endpoint) class to execute an SQL query.
  - `$sql` is set to the SQL query to get all authors from the database.
  - `setSQL()` is called to set the SQL query.
- `endpointParams()` is set to an array of the parameters that can be used in the endpoint - 'paper_id'.

## Parameters

The `Author` class contains the following parameters:

- `?paper_id` - The ID of the paper associated with an author. This will return all papers they have written or contributed to.
  - [Link to Author endpoint with the ?paper_id parameter](http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/author?paper_id=64455)
- `?search` - This allows the client to type in the searchbar and add to the query. Here, it returns all entries where the search entry matches the author's name
  - [Link to Author endpoint with the ?search parameter](http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/author?search=miho)

## Examples

An example request to the `Author` endpoint:

```http
http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/author?paper_id=64455
```

The response to the request:

```json
{
  "length": 1,
  "message": "success",
  "data": [
    {
      "author_id": "64289",
      "first_name": "Aditya",
      "middle_initial": null,
      "last_name": "Anupam",
      "institution": "Georgia Institute of Technology",
      "country": "United States"
    }
  ]
}
```

An erroneous request to the `Author` endpoint:

```http
http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/author?paper_id=54
```

The response to the request:

```json
{
  "length": 0,
  "message": "success",
  "data": []
}
```

## HTTP Status Codes

The `Author` class can return 200 or 400 status codes.

## Authors

The `Author` class was created by [Tom Shaw](https://github.com/tomshaw650).
