<?php

use FirebaseJWT\JWT;
use FirebaseJWT\Key;

/**
 * Update the award status of a paper
 *
 * A JWT is required to update an award status of a paper
 *
 * @author Tom Shaw
 */
class Update extends Endpoint
{
    public function __construct()
    {
        // ensure the request is POST
        $this->validateRequestMethod("POST");
        // validate the token sent
        $this->validateToken();

        // validate the update parameters
        $this->validateUpdateParams();

        // initialise DB and set SQL query
        $db = new Database("db/chiplay.sqlite");
        $this->initialiseSQL();
        $queryResult = $db->executeSQL($this->getSQL(), $this->getSQLParams());

        $this->setData(array(
            "length" => 0,
            "message" => "Success",
            "data" => null,
        ));
    }

    private function validateRequestMethod($method)
    {
        // ensure the request is POST
        if ($_SERVER['REQUEST_METHOD'] != $method) {
            throw new ClientErrorException("Invalid Request Method", 405);
        }
    }

    private function validateToken()
    {
        // use the secret
        $key = SECRET;

        // Get all headers from the http request
        $allHeaders = getallheaders();
        $authorizationHeader = "";

        // Look for an Authorization header
        if (array_key_exists('Authorization', $allHeaders)) {
            $authorizationHeader = $allHeaders['Authorization'];
        } elseif (array_key_exists('authorization', $allHeaders)) {
            $authorizationHeader = $allHeaders['authorization'];
        }

        // Check if there is a Bearer token in the header
        if (substr($authorizationHeader, 0, 7) != 'Bearer ') {
            throw new ClientErrorException("Bearer token required", 401);
        }

        // Extract the JWT from the header (by cutting the text 'Bearer ')
        $jwt = trim(substr($authorizationHeader, 7));

        try {
            // Use the JWT class to decode the token
            $decoded = JWT::decode($jwt, new Key($key, 'HS256'));
        } catch (Exception $e) {
            throw new ClientErrorException($e->getMessage(), 401);
        }

        // if the issuer is not the expected one, throw an appropriate error
        if ($decoded->iss != $_SERVER['HTTP_HOST']) {
            throw new ClientErrorException("invalid token issuer", 401);
        }
    }

    private function validateUpdateParams()
    {
        // check for award status parameter
        if (!filter_has_var(INPUT_POST, 'has_award')) {
            throw new ClientErrorException("award status required", 400);
        }

        // check for paper id
        if (!filter_has_var(INPUT_POST, 'paper_id')) {
            throw new ClientErrorException("paper ID required", 400);
        }

        // ensure the given award status is valid for the DB
        $award_status_types = ["true", null];
        if (!in_array(strtolower($_POST['has_award']), $award_status_types)) {
            throw new ClientErrorException("invalid award status", 400);
        }
    }

    protected function initialiseSQL()
    {
        // set the SQL query to update the award status of a paper
        $sql = "UPDATE paper SET award = :award WHERE paper_id = :paper_id";

        // Check the value of the "has_award" field
        if ($_POST['has_award'] === "true") {
            // If it is "true", set the "award" parameter to true
            $this->setSQLParams(['award' => "true", 'paper_id' => $_POST['paper_id']]);
        } else {
            // If it is not "true", set the "award" parameter to null
            $this->setSQLParams(['award' => null, 'paper_id' => $_POST['paper_id']]);
        }

        // set the sql and parameters
        $this->setSQL($sql);
    }

}
