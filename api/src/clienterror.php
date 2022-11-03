<?php
/**
 * 
 * Class to handle any client errors that may occur
 * Extends the Endpoint class
 * 
 * @return array with an HTTP error 400 and relevant message
 * 
 * @author Tom Shaw
 * @author John Rooksby
 * 
 */
class ClientError extends Endpoint
{
	public function __construct($message = "", $code = 400) {
		http_response_code($code);

		$this->setData(array(
			"length" => 0,
			"message" => $message,
			"data" => null
		));
	}
}
