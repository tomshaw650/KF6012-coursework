<?php
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
