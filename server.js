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
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});

app.get('/boxes', function (req, res) {
   index.listInventory.then((result) => res.json(result));
});

// this request is for adding boxes
app.post('/addbox', function (req, res) {
    index.addBox(req.body)
        .then(res.send("Box Added Successfully"))
        .catch((err) => res.send(err));    
});

app.post('/removebox', function (req, res) {
    index.removeBox(req.query.id)
        .then(res.send("Box Removed Successfully"))
        .catch((err) => res.send(err));
});
/// edit a box ! 
app.post('/editbox', function (req, res) {
    res.send(index.editBox(req.body));
});

app.listen(process.env.PORT || 8080);