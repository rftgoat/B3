let express = require('express');
let app = express();
let cors = require('cors');

app.use(cors({
  origin: 'https://notes-app-frontend.glitch.me'
}));

app.use(express.json())

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/funds/:id', function(request, response) {
    let note = {x: '1212', y: "9sd0as"};
    response.setHeader('Content-Type', 'application/json');
    response.status(200).send(JSON.stringify(note));
});

module.exports = app;