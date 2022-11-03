<?php
/**
 * 
 * Paper class to handle the paper endpoint
 * Returns all the papers in the database
 * Allows for parameters to be passed to filter the results
 * 
 * @param mixed initialiseSQL - sets the SQL query and params
 * 		- if no params are passed, returns all papers
 * 		- if params are passed, filters the results
 * 		- PARAMS: 
 * 			- track: returns papers from a specific track
 * 			- author ID: returns all papers associated with specified author
 * @param array endpointParams - creates an array of params to be passed
 * 
 * @author Tom Shaw
 * 
 */
class Paper extends Endpoint
{
	protected function initialiseSQL() {
		$sql = "SELECT paper.paper_id, paper.title, paper.award, paper.abstract, track.short_name AS track, track.name
                FROM paper
                INNER JOIN track ON (paper.track_id = track.track_id)
				INNER JOIN paper_has_author ON (paper.paper_id = paper_has_author.paper_id)";
		$this->setSQL($sql);
		$sqlParams = [];

		if (filter_has_var(INPUT_GET, 'track')) {
			$track = htmlspecialchars($_GET['track']);

			if (isset($where)) {
				$where .= " AND track.short_name LIKE :track";
			} else {
				$where = " WHERE track.short_name LIKE :track";
			}
			$sqlParams['track'] = '%' . $track . '%';
		}

		if (filter_has_var(INPUT_GET, 'author_id')) {
			if (!filter_var($_GET['author_id'], FILTER_VALIDATE_INT)) {
				http_response_code(400);
				$output['message'] = "ID must be an integer";
				die(json_encode($output));
			}

			if (isset($where)) {
				$where .= " AND paper_has_author.authorId = :author_id";
			} else {
				$where = " WHERE paper_has_author.authorId = :author_id";
			}
			$sqlParams['author_id'] = $_GET['author_id'];
		}

		if (isset($where)) {
			$sql .= $where;
		}

		$this->setSQL($sql);
		$this->setSQLParams($sqlParams);
	}

	protected function endpointParams() {
		return ['track', 'author_id'];
	}
}
