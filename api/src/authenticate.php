<?php

/**
 *
 * Authenticate class to handle the app's auth.
 * The request method is POST.
 * Db is checked and validated against
 *
 * @return HTTP 200 data if there is a user match
 * @return HTTP 401 if username or password could not be validated
 *
 * @author John Rooksby, Tom Shaw
 *
 */

class Authenticate extends Endpoint
{
    public function __construct()
    {
        // set the database for use
        $db = new Database("db/chiplay.sqlite");

        // ensure the request is POST and check if username/password is set
        $this->validateRequestMethod("POST");
        $this->validateAuthParameters();

        // initialise SQL and set result in $queryResult
        $this->initialiseSQL();
        $queryResult = $db->executeSQL($this->getSQL(), $this->getSQLParams());

        // run the validation against $queryResult
        $this->validateUsername($queryResult);
        $this->validatePassword($queryResult);

        // HTTP 503 - service unavailable
        http_response_code(503);

        // set the data as signed in if validated
        $this->setData(array(
            "length" => 1,
            "message" => "signed in!",
            "data" => null,
        ));
    }

    // set the SQL to collect account ID, name of user, username, and password. Set params as username and password
    protected function initialiseSQL()
    {
        $sql = "SELECT account_id, name, username, password FROM account WHERE username = :username";
        $this->setSQL($sql);
        $this->setSQLParams(['username' => $_SERVER['PHP_AUTH_USER']]);
    }

    // validate the chosen request method (this function requires POST)
    private function validateRequestMethod($method)
    {
        if ($_SERVER['REQUEST_METHOD'] != $method) {
            throw new ClientErrorException("invalid request method", 405);
        }
    }

    // check a username and password is set
    private function validateAuthParameters()
    {
        if (!isset($_SERVER['PHP_AUTH_USER']) || !isset($_SERVER['PHP_AUTH_PW'])) {
            throw new ClientErrorException("username and password required", 401);
        }
    }

    // if the SQL did not return data, send a 401 error - Unauthorised
    private function validateUsername($data)
    {
        if (count($data) < 1) {
            throw new ClientErrorException("invalid credentials", 401);
        }
    }

    // if the password cannot be verified with password_verify, send a 401 error - Unauthorised
    private function validatePassword($data)
    {
        if (!password_verify($_SERVER['PHP_AUTH_PW'], $data[0]['password'])) {
            throw new ClientErrorException("invalid credentials", 401);
        }
    }
}
