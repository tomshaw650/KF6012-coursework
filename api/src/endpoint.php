<?php
/**
 * 
 * An abstract class to be used to create endpoints for the API
 * 
 * @var array $data - the data to be returned as JSON
 * @var string $sql - the SQL query to be executed
 * @var array $sqlParams - the parameters to be passed to the SQL query
 * 
 * @param mixed $setSQL - sets the SQL query to be executed
 * @param mixed $setSQLParams - gets the SQL params to be passed to the SQL query
 * @param mixed $initialiseSQL - initialises the SQL query and params
 * @param mixed $setData - sets the data to be returned as JSON
 * @param mixed $getData - gets the data to be returned as JSON
 * @param array $endpointParams - creates an empty array to insert params
 * @param mixed validateParams - checks if the params are valid and HTTP error 400 if not
 * 
 * 
 * @author Tom Shaw
 * @author John Rooksby
 * 
 */
abstract class Endpoint
{
	private $data;
	private $sql;
	private $sqlParams;

	public function __construct() {
		$db = new Database("db/chiplay.sqlite");

		$this->initialiseSQL();
		$this->validateParams($this->endpointParams());

		$data = $db->executeSQL($this->sql, $this->sqlParams);

		$this->setData(array(
			"length" => count($data),
			"message" => "success",
			"data" => $data
		));
	}

	protected function setSQL($sql) {
		$this->sql = $sql;
	}

	protected function setSQLParams($params) {
		$this->sqlParams = $params;
	}

	protected function initialiseSQL() {
		$sql = "";
		$this->setSQL($sql);
		$this->setSQLParams([]);
	}

	protected function setData($data) {
		$this->data = $data;
	}

	public function getData() {
		return $this->data;
	}

	protected function endpointParams() {
		return [];
	}

	protected function validateParams($params) {
		foreach ($_GET as $key => $value) {
			if (!in_array($key, $params)) {
				http_response_code(400);
				$output['message'] = "Invalid parameter: " . $key;
				die(json_encode($output));
			}
		}
	}
}
