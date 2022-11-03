<?php
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
