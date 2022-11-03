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
                INNER JOIN track ON (paper.track_id = track.track_id)";
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

		if (isset($where)) {
			$sql .= $where;
		}

		$this->setSQL($sql);
		$this->setSQLParams($sqlParams);

		var_dump($sql);
		var_dump($sqlParams);
	}

	protected function endpointParams() {
		return ['track'];
	}
}
