const http = require('http');
const formidable = require('formidable');
const fs = require('fs');

const server = http.createServer(function (req, res) {
  if (req.url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(fs.readFileSync('./index.html'));
  } else if (req.url === '/upload') {
    const form = formidable({ multiples: true, uploadDir: './file' });
    form
      .on('file', (filename, file) => {
        fs.rename(file.path, `./file/${file.name}`, function (err) {
          //
        });
      })
      .on('end', () => {
        res.end('done');
      });
    form.parse(req);
  }
});

server.listen(3001, function () {
  //
});
