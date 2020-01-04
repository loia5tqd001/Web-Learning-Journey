const fs = require("fs");
const path = require("path");
const log = require("log-to-file"); // https://www.npmjs.com/package/log-to-file


// ======================= Utilities ====================
// get all file from path: https://stackoverflow.com/a/52024318/9787887
function getFilesFromPath(path, extension) {
  const dir = fs.readdirSync(path);
  return dir.filter(elm => elm.match(new RegExp(`.*\.(${extension})`, "ig")));
}

// log out to `dir/output.log`
function logout(dir = '.', ...arguments) {
  const toLog = Array.from(arguments).join(" ");
  log(toLog, path.join(dir, 'output.log'));
}


// ======================= Execution =====================
// https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/
const folders = process.argv.slice(2); 

// expected: `node rename.js [folder-to-rename] [folder-to-rename] [folder-to-rename]...`
folders.forEach(folder => {

  // delete all `.webp` files
  getFilesFromPath(folder, ".webp").forEach(fileName => {
    const file = path.join(folder, fileName);

    fs.unlink(file, err => {
      if (err) {
        logout(folder, "ERROR:", err);
      } else {
        logout(folder, "SUCCESS: deleted", fileName);
      }
    });
  });

  // rename all `.jpg files`
  // rename file in nodejs: https://stackoverflow.com/a/22504722/9787887
  getFilesFromPath(folder, ".jpg").forEach((fileName, index) => {
    const file = path.join(folder, fileName);

    fs.rename(file, path.join(folder, `${index}.jpg`), err => {
      if (err) {
        logout(folder, "ERROR:", err);
      } else {
        logout(folder, `SUCCESS: ${fileName} -> ${index}.jpg`);
      }
    });
  });

  console.log("Done for folder", folder);

})

