# paper.php

[Link to Paper endpoint in production](http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/paper)

The `paper.php` file is the class used for the paper endpoint of the API. It is located in the `src` directory of the API.

The `paper.php` file contains the `Paper` class, and extends the [`Endpoint`](/v1/API/Endpoints/endpoint). The `Paper` class is used to return all papers from the database.

## Methods

The `Paper` class contains the following methods:

- `initialiseSQL()` - The main function for the `Paper` class. Inherited from the [`Endpoint`](/v1/API/Endpoints/endpoint) class to execute an SQL query. For this class, it is placed at the bottom of the file, in order to set the `$where`.
  - `$sql` is set to the SQL query to get all papers from the database. This is grouped by the MIN() of author names as well as paper info, so that each paper is only returned once.
  - `setSQL()` is called to set the SQL query.
- `endpointParams()` is set to an array of the parameters that can be used in the endpoint - 'track', 'paper_id' and 'search'

## Parameters

The `Paper` class contains the following parameters:

- `?track` - The track of the paper. This can be `Interactivity`, `wip`, `fullpapers`, `competition`, `doctoral`, `rapid`. This will return all papers in the specified track.
- '?author_id' - The ID of a specific author. This will return all papers by the specified author.
  - [Link to the Paper endpoint with the ?author_id parameter](http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/paper?author_id=64216)
  - [Link to Paper endpoint with the ?track parameter](http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/paper?track=wip)
- `?paper_id` - The ID of a specific paper..
  - [Link to Paper endpoint with the ?paper_id parameter](http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/paper?paper_id=64455)
- `?search` - This allows the client to type in the searchbar and add to the query. Here, it returns all entries where the search entry matches the paper title or abstract.
  - [Link to Paper endpoint with the ?search parameter](http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/paper?search=game)

## Examples

An example request to the `paper` endpoint is as follows:

```http
http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/paper?paper_id=64455
```

An example response to this endpoint is as follows:

```json
{
  "length": 1,
  "message": "success",
  "data": [
    {
      "paper_id": "64455",
      "title": "Can Digital Games Teach Scientific Inquiry? A Case of How Affordances Can Become Constraints",
      "first_name": "Aditya",
      "middle_initial": null,
      "last_name": "Anupam",
      "has_award": null,
      "abstract": "Digital games are increasingly being used to teach the processes of scientific inquiry. These games often make at least one of four key assumptions about scientific inquiry: that inquiry is a problem-solving process which is value-neutral, bounded by strict subject-matter constraints, and conducted by practitioners separable from society. However, feminist, STS, and pragmatist scholars have demonstrated the flawed nature of these assumptions. They highlight instead that: inquiry is a process of problematization that is value-laden, unbounded by subject-matter, and conducted by practitioners who socially, politically, and culturally situated. In this paper, I argue that three of the key affordances of digital games—their procedural, evaluative, and fictional qualities—can constrain their ability to teach inquiry understood as such. I examine these affordances and their relationship to the nature of scientific inquiry through a design case examining our game Solaria designed to teach students how to inquire into the development of solar cells. Specifically, I ask: To what extent can the procedural, evaluative, and fictional affordances of digital games (designed to teach students about solar cells) support the learning of scientific inquiry as a problematizing, situated, and value-laden process, unbounded by subject-matter constraints? I discuss how these affordances of games supported but ultimately limited the design of the game by trivializing real situations, predetermining criteria for progress, and distancing students from real-world risks and responsibilities, respectively. In conclusion, I briefly discuss how understanding these limitations can support the design of educational environments to complement digital games for teaching scientific inquiry.",
      "video": "https://www.youtube.com/watch?v=OdYKiNZGgqM",
      "track_key": "fullpapers",
      "track_name": "CHI PLAY 2021 Full Papers"
    }
  ]
}
```

An erroneous request to the `paper` endpoint is as follows:

```http
http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/paper?paper_id=hello
```

The response would be as such:

```json
{ "message": "ID must be an integer" }
```

## HTTP Status Codes

The `Paper` class can return 200 or 400 status codes.

## Authors

The `Paper` class was created by [Tom Shaw](https://github.com/tomshaw650).
