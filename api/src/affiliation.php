<?php

/**
 *
 * Affiliation class finds associated country and institution with each author
 * This is interfaced by the react app to create a page to display this information.
 * 
 *  * @param mixed initialiseSQL - sets the SQL query and params
 *         - if no params are passed, returns all authors
 *         - if params are passed, filters the results
 *         - PARAMS:
 *             - search: returns all authors where the name or institution contains the search term
 *
 * @author Tom Shaw
 *
 */

class Affiliation extends Endpoint
{
    protected function initialiseSQL()
    {
        $sql = "SELECT DISTINCT author.author_id, author.first_name, author.middle_initial, author.last_name, affiliation.country, affiliation.institution, affiliation.department
                FROM author
                INNER JOIN affiliation ON (author.author_id = affiliation.person_id)";
        $sqlParams = [];

        // validate search parameter
        if (filter_has_var(INPUT_GET, 'search')) {
            $search = htmlspecialchars($_GET['search']);

            // Create search parameter for this query
            if (isset($where)) {
                $where .= " AND (author.first_name LIKE :search OR author.last_name LIKE :search OR affiliation.country LIKE :search OR affiliation.institution LIKE :search OR affiliation.department LIKE :search)";
            } else {
                $where = " WHERE (author.first_name LIKE :search OR author.last_name LIKE :search OR affiliation.country LIKE :search OR affiliation.institution LIKE :search OR affiliation.department LIKE :search)";
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
        return ['search'];
    }
}
