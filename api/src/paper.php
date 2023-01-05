<?php
/**
 *
 * Paper class to handle the /paper endpoint
 * Returns all the papers from the database
 * Allows for parameters to be passed to filter the results
 *
 * @param mixed initialiseSQL - sets the SQL query and params
 *         - if no params are passed, returns all papers
 *         - if params are passed, filters the results
 *         - PARAMS:
 *             - track: returns papers from a specific track
 *             - author ID: returns all papers associated with specified author
 *             - paper ID: returns the paper related to the ID. for use in app
 *             - search: returns all papers with a title or abstract that contains the search term
 * @param array endpointParams - creates an array of params to be passed
 *
 * @author Tom Shaw
 *
 */

class Paper extends Endpoint
{
    protected function initialiseSQL()
    {
        // set the SQL params as an array
        $sqlParams = [];

        // validate track parameter
        if (filter_has_var(INPUT_GET, 'track')) {
            $track = htmlspecialchars($_GET['track']);

            // Create track parameter for this query
            if (isset($where)) {
                $where .= " AND track.short_name LIKE :track";
            } else {
                $where = " WHERE track.short_name LIKE :track";
            }
            $sqlParams['track'] = '%' . $track . '%';
        }

        // validate author_id parameter
        if (filter_has_var(INPUT_GET, 'author_id')) {
            if (!filter_var($_GET['author_id'], FILTER_VALIDATE_INT)) {
                http_response_code(400);
                $output['message'] = "ID must be an integer";
                die(json_encode($output));
            }

            // Create author_id parameter for this query
            if (isset($where)) {
                $where .= " AND paper_has_author.authorId = :author_id";
            } else {
                $where = " WHERE paper_has_author.authorId = :author_id";
            }
            $sqlParams['author_id'] = $_GET['author_id'];
        }

        // validate paper_id parameter
        if (filter_has_var(INPUT_GET, 'paper_id')) {
            if (!filter_var($_GET['paper_id'], FILTER_VALIDATE_INT)) {
                http_response_code(400);
                $output['message'] = "ID must be an integer";
                die(json_encode($output));
            }

            // Create paper_id parameter for this query
            if (isset($where)) {
                $where .= " AND paper.paper_id = :paper_id";
            } else {
                $where = " WHERE paper.paper_id = :paper_id";
            }
            $sqlParams['paper_id'] = $_GET['paper_id'];
        }

        // validate search parameter
        if (filter_has_var(INPUT_GET, 'search')) {
            $search = htmlspecialchars($_GET['search']);

            if (isset($where)) {
                $where .= " AND (paper.title LIKE :search OR paper.abstract LIKE :search)";
            } else {
                $where = " WHERE (paper.title LIKE :search OR paper.abstract LIKE :search)";
            }
            $sqlParams['search'] = '%' . $search . '%';
        }

        // ensure where is set
        if (!isset($where)) {
            $where = " WHERE 1=1";
        }

        // create the sql statement with the where clause added before the group by clause
        $sql = "SELECT paper.paper_id, paper.title, MIN(author.first_name) AS first_name, MIN(author.middle_initial) AS middle_initial, MIN(author.last_name) AS last_name, paper.award AS has_award, paper.abstract, paper.video, track.short_name AS track_key, track.name AS track_name
        FROM paper
        INNER JOIN track ON (paper.track_id = track.track_id)
        INNER JOIN paper_has_author ON (paper.paper_id = paper_has_author.paper_id)
        INNER JOIN author ON (author.author_id = paper_has_author.authorId)
        " . $where . "
        GROUP BY paper.paper_id, paper.title, paper.award, paper.abstract, paper.video, track.short_name, track.name";

        // set the SQL query and params
        $this->setSQL($sql);
        $this->setSQLParams($sqlParams);
    }

    protected function endpointParams()
    {
        return ['track', 'author_id', 'paper_id', 'search'];
    }
}
