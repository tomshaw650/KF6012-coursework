<?php
/**
 * 
 * Class to handle the base endpoint of the API
 * Used to display my details, and connec to DB to display the conference title
 * Extends the Endpoint class
 * 
 * @var string $sql the SQL query to be executed
 * @var Database $db the database object
 * @var array $data the data returned from the database
 * @var array $details my personal details
 * @var array $docs a link to the documentation for this project
 * @var array $conference the full title of the conference returned from $data
 * @var array $base a collection of all data to be returned as data via index.php
 * 
 * @author Tom Shaw
 * 
 */
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
