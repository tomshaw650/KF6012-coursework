<?php
/**
 * 
 * A class to handle database connections and queries
 * 
 * @param PDO $dbConnection - the database connection
 * @param mixed $setDbConnection - sets up the file path to the database or errors
 * @param mixed $executeSQL - prepares and executes the SQL query and returns the data
 * 
 * 
 * @author Tom Shaw
 * @author John Rooksby
 * 
 */
class Database
{
	private $dbConnection;

	public function __construct($dbName) {
		$this->setDbConnection($dbName);
	}

	private function setDbConnection($dbName) {
		try {
			$this->dbConnection = new PDO('sqlite:' . $dbName);
			$this->dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		} catch (PDOException $e) {
			echo "Database Connection Error" . $e->getMessage();
			exit();
		}
	}

	public function executeSQL($sql, $params = []) {
		$stmt = $this->dbConnection->prepare($sql);
		$stmt->execute($params);

		return $stmt->fetchAll(PDO::FETCH_ASSOC);
	}
}
