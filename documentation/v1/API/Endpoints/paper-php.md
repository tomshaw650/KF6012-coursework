---
sidebar_position: 6
---

# paper.php

[Link to Paper endpoint in production](http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/paper)

The `paper.php` file is the class used for the paper endpoint of the API. It is located in the `src` directory of the API.

The `paper.php` file contains the `Paper` class, and extends the [`Endpoint`](/v1/API/Endpoints/endpoint-php).

## Methods

The `Paper` class contains the following methods:
- `__construct()` - The constructor for the `Paper` class. This uses the `initialiseSQL()` method from the [`Endpoint`](/v1/API/Endpoints/endpoint-php) class to execute an SQL query.
  - `$sql` is set to the SQL query to get all papers from the database.
  - `setSQL()` is called to set the SQL query.
- `endpointParams()` is set to an array of the parameters that can be used in the endpoint - 'track', and 'author_id'.

## Parameters

The `Paper` class contains the following parameters:
- `?track` - The track of the paper. This can be `Interactivity`, `wip`, `fullpapers`, `competition`, `doctoral`, `rapid`. This will return all papers in the specified track.
  - [Link to Paper endpoint with the ?track parameter](http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/paper?track=wip)
- `?author_id` - The ID of the author of the paper. This will return all papers by the author.
  - [Link to Paper endpoint with the ?author_id parameter](http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/paper?author_id=64216)

## Authors

The `Paper` class was created by [Tom Shaw](https://github.com/tomshaw650).