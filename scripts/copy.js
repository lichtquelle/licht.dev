const fs = require('fs')

const copy = function (src, dest) {
  const oldFile = fs.createReadStream(src)
  const newFile = fs.createWriteStream(dest)
  oldFile.pipe(newFile)
}
copy('CNAME', 'dist/CNAME')
