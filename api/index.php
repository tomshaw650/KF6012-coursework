<?php
// set HTTP headers
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");

// include and register the autoloader
include 'config/autoloader.php';
spl_autoload_register('autoloader');

// if there is no endpoint, return the ClientError endpoint
if (!in_array($_SERVER['REQUEST_METHOD'], array("GET"))) {
	$endpoint = new ClientError("Invalid method: " . $_SERVER['REQUEST_METHOD'], 405);
} else {
	// Work out the request from the path
	$path = parse_url($_SERVER['REQUEST_URI'])['path'];
	$path = str_replace("/kf6012/coursework/api", "", $path);

	// Route the request as appropriate
	switch ($path) {
		case '/':
			$endpoint = new Base();
			break;
		case '/paper':
		case '/paper/':
		case '/papers':
		case '/papers/':
			$endpoint = new Paper();
			break;
		default:
			$endpoint = new ClientError("Path not found: " . $path, 404);
	}
}

// get the data from the endpoint
$response = $endpoint->getData();

// return the data as formatted JSON
echo json_encode($response, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
