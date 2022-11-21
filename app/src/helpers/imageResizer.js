/**
 *
 * A hacky CJS function to resize images in a directory
 * Used to improve performance of the app by reducing hero image size
 * Simply run with `node imageResizer.js` in the terminal
 *
 * @author Kate Hempenius, Tom Shaw
 *
 */

// sharp is a node module for image manipulation
const sharp = require("sharp");
// fs is a node module for file system manipulation
const fs = require("fs");

// directory set to the directory of images
const directory = "C:/xampp/htdocs/kf6012/coursework/app/src/images";

// for each file in the directory, resize the image
fs.readdirSync(directory).forEach((file) => {
  sharp(`${directory}/${file}`)
    .resize(288, 288) // width, height
    .toFile(`${directory}/desktop-${file}`); // sets name of new file
});
