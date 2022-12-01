<?php

/**
 *
 * Exception handler function sends a HTTP error
 * code 500, which is a generic error code.
 *
 * It sets an output which is JSON encoded to send
 * data about the exception in a formatted manner.
 *
 */

function exceptionHandler($e)
{
    http_response_code(500);

    $output['message'] = $e->getMessage();
    $output['location']['file'] = $e->getFile();
    $output['location']['line'] = $e->getLine();

    echo json_encode($output, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
}
