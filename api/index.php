<?php
// set HTTP headers
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");

// include and register the autoloader
include 'config/autoloader.php';
spl_autoload_register('autoloader');

// include and set the exception handler
include 'config/exceptionhandler.php';
set_exception_handler('exceptionhandler');

// Work out the request from the path
$path = parse_url($_SERVER['REQUEST_URI'])['path'];
$path = str_replace("/kf6012/coursework/api", "", $path);

try {
// Route the request as appropriate
    switch ($path) {
        case '/':
            $endpoint = new Base();
            http_response_code(200);
            break;
        case '/auth':
            $endpoint = new Authenticate();
            http_response_code(200);
            break;
        case '/paper':
        case '/paper/':
        case '/papers':
        case '/papers/':
            $endpoint = new Paper();
            http_response_code(200);
            break;
        case '/author':
        case '/author/':
        case '/authors':
        case '/authors/':
            $endpoint = new Author();
            http_response_code(200);
            break;
        default:
            $endpoint = new ClientError("Path not found: " . $path, 404);
    }
} catch (ClientErrorException $e) {
    $endpoint = new ClientError($e->getMessage(), $e->getCode());
}
// get the data from the endpoint
$response = $endpoint->getData();

// return the data as formatted JSON
echo json_encode($response, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
