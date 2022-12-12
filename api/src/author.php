<?php

/**
 *
 * Author class to handle the /author endpoint
 * Returns all the authors from the database
 * Allows for parameters to be passed to filter the results
 *
 * @param mixed initialiseSQL - sets the SQL query and params
 *         - if no params are passed, returns all papers
 *         - if params are passed, filters the results
 *         - PARAMS:
 *             - paper ID: returns associated authors from a given paper ID
 *             - search: returns all authors with a first or last name that contains the search term
 * @param array endpointParams - creates an array of params to be passed
 *
 * @author Tom Shaw
 *
 */

class Author extends Endpoint
{
    protected function initialiseSQL()
    {
        $sql = "SELECT DISTINCT author.author_id, author.first_name, author.middle_initial, author.last_name
            FROM author
            LEFT JOIN paper_has_author ON (author.author_id = paper_has_author.authorId)
            LEFT JOIN paper ON (paper_has_author.paper_id = paper.paper_id)";
        $sqlParams = [];

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

            // Create search parameter for this query
            if (isset($where)) {
                $where .= " AND (author.first_name LIKE :search OR author.last_name LIKE :search)";
            } else {
                $where = " WHERE (author.first_name LIKE :search OR author.last_name LIKE :search)";
            }
            $sqlParams['search'] = '%' . $search . '%';
        }

        // add where clause to SQL query
        if (isset($where)) {
            $sql .= $where;
        }

        $this->setSQL($sql);
        $this->setSQLParams($sqlParams);
    }

    protected function endpointParams()
    {
        return ['paper_id', 'search'];
    }
}
