# imageResizer.js

## Overview

This is a CJS function used to resize images. It takes in a directory, and returns resized images based on given dimensions. It uses the `sharp` library to resize the image. `fs` is used to read the directory.

## Why is this needed?

I found I had perfomance issues with slow page loads in the web application. I was using a standard JPG from Unsplash and resizing it with Tailwind. This was causing the page to load slowly. I found that resizing the image with `sharp` and then using the resized image in the web application improved the page load time.

## How does it work?

The directory is set as a variable, and then the `fs` library is used to read the directory. For each file in the given directory, `sharp` resizes the image to 288x288 pixels, and renames it appended with 'desktop-'.

## Authors

This function was created by [Kate Hempenius](https://web.dev/serve-responsive-images/) as advice for fixing Google Lighthouse issues, and updated for use in this project by [Tom Shaw](https://github.com/tomshaw650)
