require('dotenv').config();

const express = require('express');
const app = express();
const logger = require('morgan')
const bodyParser = require('body-parser');
const path = require('path')
const resourceRouter = require('./routes/resourceRouter')

const DIST_DIR = path.join(__dirname, '../client/build'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW

// var pathname = url.parse(request.url).pathname;
// var ext = path.extname(pathname).substr(1);
// console.log(ext)
// // check extension and set mime type
// // HTTP Status: 200 : OK
// if (ext === 'css') {
//   // check for css
//   response.writeHead(200, {'Content-Type': 'text/css'});
// } else {
//   // Content Type: text/plain
//   // maybe also check .html type
//   response.writeHead(200, {'Content-Type': 'text/html'});
// }

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.use('/', express.static("../client/build")); 


app.use('/api/resources', resourceRouter);
app.get('/*', (req, res) => {
    res.sendFile(HTML_FILE)
  });

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
})


