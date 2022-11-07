---
sidebar_position: 1
---

# How it Works

## Overview

The API is a REST API that uses JSON for serialization. It is designed to be simple and intuitive. All requests and responses are in JSON format. Endpoints are written as PHP classes in an object oriented manner. Each endpoint is prefixed with `/kf6012/coursework/api`.

## .htaccess

The `.htaccess` file is used to rewrite the URL to the `index.php` file and to allow for the removal of `.php` from URLs. This is done to ensure that the URL is not exposed to the user. The `.htaccess` file is located in the root directory of the API.

## index.php

The `index.php` file is the entry point for the API. It is responsible for routing the request to the correct endpoint. It is located in the root directory of the API.

HTTP headers are set initially, and an autoloader is included. The autoloader is used to load the endpoint classes. Some validation is done to ensure an endpoint exists, sending the user to a 404 `ClientError` page.

The URL is parsed to determine the endpoint. The path is passed to a switch statement to determine the endpoint and HTTP response. The endpoint is then turned into a response by calling the `getData()` method, and echoing the JSON encoded response.
