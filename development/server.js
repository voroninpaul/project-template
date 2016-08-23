var express = require('express');
var path = require('path');
var fs = require('fs');

var app = express();

app.use('/public', express.static('build'));
app.set('view engine', 'html');
app.set('views', path.resolve(__dirname, '../views'));
app.engine('html', function (path, options, cb) {
    fs.readFile(path, 'utf8', function (err, content) {
        cb(err, content);
    });
});

app.get('*', function (req, res) {
    res.render('index');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
