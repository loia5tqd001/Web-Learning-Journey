const dir = require('node-dir')
const fs = require('fs')

const dataCombined = []

dir.readFiles('./data',

  function(err, content, next) {
    if (err) throw err
    dataCombined.push(...JSON.parse(content))
    next()
  },

  function(err) {
    if (err) throw err
    fs.writeFileSync('./data.json', JSON.stringify(dataCombined, null, 2))
  }
)
