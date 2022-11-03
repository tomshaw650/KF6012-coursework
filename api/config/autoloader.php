<?php
/**
 * 
 * AutoLoader function takes the class name and converts to a path
 * Used to load classes without include or require
 * 
 * @author John Rooksby
 * 
 */
function autoloader($className) {
    $filename = "src\\" . strtolower($className) . ".php";
    $filename = str_replace('\\', DIRECTORY_SEPARATOR, $filename);
    if (is_readable($filename)) {
        include_once $filename;
    } else {
        exit("File not found: " . $className . " (" . $filename . ")");
    }
}