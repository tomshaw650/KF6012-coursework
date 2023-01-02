<?php

/**
 *
 * CreateAccount class handles account creation
 * The request method is POST.
 * Db is checked and validated against
 *
 * @return HTTP 201 data if there is a user match
 * @return HTTP 405 if the request method is not POST
 * @return HTTP 400 if the username already exists
 *
 * @author Tom Shaw
 *
 */
class CreateAccount extends Endpoint
{
    public function __construct()
    {
        $db = new Database("db/chiplay.sqlite");

        // ensure the request is POST and check if username/password is set
        $this->validateRequestMethod("POST");
        $this->validateUsername($_POST['username']);

        // set result of SQL query in $queryResult
        $this->initialiseSQL();
        $queryResult = $db->executeSQL($this->getSQL(), $this->getSQLParams());

        // if the query was successful, return the result
        $this->setData(array(
            "length" => 1,
            "message" => "account created!",
            "data" => $queryResult,
        ));
    }

    // insert the name, username and hashed password into the database
    protected function initialiseSQL()
    {
        $name = $_POST['name'];
        $username = $_POST['username'];
        $password = $_POST['password'];
        $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

        $sql = "INSERT INTO account (name, username, password)
            VALUES (?, ?, ?)";
        $params = [$name, $username, $hashedPassword];

        $this->setSQL($sql);
        $this->setSQLParams($params);
    }

    // validate the chosen request method (this function requires POST)
    private function validateRequestMethod($method)
    {
        if ($_SERVER['REQUEST_METHOD'] != $method) {
            throw new ClientErrorException("invalid request method", 405);
        }
    }

    // if username is already in the database, throw an error
    private function validateUsername($username)
    {
        $db = new Database("db/chiplay.sqlite");
        $sql = "SELECT * FROM account WHERE username = ?";
        $params = [$username];
        $queryResult = $db->executeSQL($sql, $params);

        if (count($queryResult) > 0) {
            throw new ClientErrorException("username already exists", 400);
        }
    }
}
