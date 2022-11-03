<?php
class Base extends Endpoint
{	
	private $sql = "SELECT name from conference_information";

	public function __construct() {
		$db = new Database("db/chiplay.sqlite");

		$data = $db->executeSQL($this->sql);

		$details = array(
			"first_name" => "Tom",
			"last_name" => "Shaw",
			"student_num" => "W19025481"
		);

		$docs = array(
			"link" => "http://unn_w19025481.newnumyspace.co.uk/kf6012/coursework/api/docs"
		);

		$conference = array(
			"name" => $data[0]['name']
		);

		$base = array(
			"details" => $details,
			"docs" => $docs,
			"conference" => $conference
		);

		$this->setData(array(
			"length" => count($base),
			"message" => "success",
			"data" => $base
		));
	}
}
