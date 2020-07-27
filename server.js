const express = require('express');
var bodyParser = require('body-parser')
const index = require('./src/index');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        res.header('Access-Control-Allow-Methods', 'GET');
        res.send();
    });
});

app.get('/boxes', function (req, res) {
   index.listInventory.then((result) => res.json(result));
});

app.get('/', function (req, res) {
    res.send("I'm alive!");
 });

app.listen(process.env.PORT || 8080);