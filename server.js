const express = require('express');
const admin = require('./routes/admin');
const path = require('path');
const app = express();
const config = require('./config/constants');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client/build')));

//admin route
require('./config/routes')(app);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
})

app.listen(3000, (err) => {
    if (err) console.log("err");

    console.log("port started");
})