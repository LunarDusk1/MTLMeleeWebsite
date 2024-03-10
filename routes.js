module.exports = function(app){

  const {readFile} = require('fs');
    app.get('/', (request, response) => {
        readFile('./Views/index/index.html', 'utf8', (err, html) => {
          if(err)
          {
            response.status(500).send("woopsie")
          }
          response.send(html);
        })
      });
      
      app.get('/header', (request, response) => {
        readFile('./Views/Components/page-header.html', 'utf8', (err, html) => {
          if(err)
          {
            response.status(500).send("woopsie")
          }
          response.send(html);
        })
      });
}