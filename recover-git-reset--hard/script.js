const fs = require("fs").promises

const listKeyword = [
  "VerifyFrontId",
  "FrontIdCamera",
  "BackIdCamera",
  "CameraToolbar",
  "TimelineComponent",
  "expo start"
]

main()
async function main() {
  const lostFolder = ".git/lost-found/other"
  const allLostFiles = await fs.readdir(lostFolder)

  await Promise.all(
    allLostFiles.map(async lostFile => {
      const content = await fs.readFile(lostFolder + "/" + lostFile, {
        encoding: "utf-8"
      })

      listKeyword.forEach(keyword => {
        if (content.includes(keyword)) {
          fs.copyFile(`${lostFolder}/${lostFile}`, `./${keyword}_${lostFile.slice(-10)}.js`)
        }
      })
    })
  )

  console.log("done")
}

