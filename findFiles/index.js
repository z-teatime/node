const fs = require("fs");
const path = require("path");

function findFilesSync(startPath, reg) {
  let result = [];
  startPath = path.resolve(__dirname, startPath);

  function finder(_path) {
    let files = fs.readdirSync(_path);

    files.forEach((val, index) => {
      let fPath = path.join(_path, val);
      let stats = fs.statSync(fPath);

      if (stats.isDirectory()) finder(fPath);

      if (stats.isFile()) {
        console.log("extname", path.extname(val), fPath);
        // if (path.extname(val))
        result.push(fPath);
      }
    });
  }

  finder(startPath);

  return result;
}

let fileNames = findFilesSync("./");
