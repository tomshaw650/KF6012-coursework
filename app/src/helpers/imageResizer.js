// Kate Hempenius

const sharp = require("sharp");
const fs = require("fs");
const directory = "C:/xampp/htdocs/kf6012/coursework/app/src/images";

fs.readdirSync(directory).forEach((file) => {
  sharp(`${directory}/${file}`)
    .resize(288, 288) // width, height
    .toFile(`${directory}/desktop-${file}`); // sets name of new file
});
