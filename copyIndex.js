const fs = require('fs')
if (process.env.__DEV__) {
  fs.copyFileSync('./index.dev.html', './public/index.html')
} else {
  fs.copyFileSync('./index.html', './public/index.html')
}
