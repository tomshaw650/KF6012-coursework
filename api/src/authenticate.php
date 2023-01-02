<?php

use FirebaseJWT\JWT;

/**
 *
 * Authenticate class to handle the app's auth.
 * The request method is POST.
 * Db is checked and validated against
 *
 * Issues a JWT if the user account is valid
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
        $db = new Database("db/chiplay.sqlite");

        // ensure the request is POST and check if username/password is set
        $this->validateRequestMethod("POST");
        $this->validateAuthParameters();

        // set result of SQL query in $queryResult
        $this->initialiseSQL();
        $queryResult = $db->executeSQL($this->getSQL(), $this->getSQLParams());

        // validate $queryResult
        $this->validateUsername($queryResult);
        $this->validatePassword($queryResult);

        // create a JWT with the key 'token'
        $data['token'] = $this->createJWT($queryResult);

        $this->setData(array(
            "length" => 1,
            "message" => "signed in!",
            "data" => $data,
        ));
    }

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

    private function createJWT($queryResult)
    {

        // use the secret
        $secretKey = SECRET;

        // we need to know the time for the payload arguments
        $time = time();

        /**
         * specify the contents of the payload:
         * @param iat - issued at. when the token was issues
         * @param exp - expires at. we set this to a day after issue
         * @param iss - issuer. we set this as the HTTP_HOST
         * @param sub - subject. we set this as the account id.
         *
         */
        $tokenPayload = [
            'iat' => $time,
            'exp' => strtotime('+1 day', $time),
            'iss' => $_SERVER['HTTP_HOST'],
            'sub' => $queryResult[0]['account_id'],
            'name' => $queryResult[0]['name'],
        ];

        // use the JWT class to encode  JWT using the secret and the HS256 hash algorithm
        $jwt = JWT::encode($tokenPayload, $secretKey, 'HS256');

        return $jwt;
    }
}
