# author.php

[Link to Author endpoint in production](http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/affiliation)

The `affiliation.php` file is the class used for the affiliation endpoint of the API. It is located in the `src` directory of the API.

The `affiliation.php` file contains the `Affiliation` class, and extends the [`Endpoint`](/v1/API/Endpoints/endpoint). The `Affiliation` class is used to return associated country and institutions with each author.

## Methods

The `Affiliation` class contains the following methods:

- `initialiseSQL()` - The main function for the `Affiliation` class. Inherited from the [`Endpoint`](/v1/API/Endpoints/endpoint) class to execute an SQL query.
  - `$sql` is set to the SQL query to get all affiliation/author info from the database.
  - `setSQL()` is called to set the SQL query.

## Parameters

The `Affiliation` class contains the following parameters:

- `?search` - This allows the client to type in the searchbar and add to the query. Here, it returns all entries where the search entry matches the author's name, or affiliations they have.

## Authors

The `Affiliation` class was created by [Tom Shaw](https://github.com/tomshaw650).
