/**
 * A web nodeJS app listening port 8015, built using express + ejs templates + bootstrap for style definitions that serves 4 urls 
 */

var myPowers = require('./common/util/math/myPowers.js');
var express = require('express');
var app = express();

app.set('views', './views'); // NOTE since "views" dir is not directly under root of project, have to set it here
app.engine('html', require('ejs').renderFile); // allows you to use pure html templates ending with extension .html

// set root route
app.get('/', function(req, res) {
    var data2template = {
        head: { title: 'Hello express with ejs' }
    };
    res.render('./views/pages/home.ejs', data2template);
});

// set square route
app.get('/square', function(req, res) {
    var data2template = {
        head: { title: 'Square Page' },
        inpNumber: 2,
        resultNumber: myPowers.toSquare(inpNumber)
    };
    res.render('./views/pages/square.ejs', data2template);
});

// set cube route
app.get('/cube', function(req, res) {
    var data2template = {
        head: { title: 'Cube Page' },
        inpNumber: 3,
        resultNumber: myPowers.toCube(inpNumber)
    };
    res.render('./views/pages/cube.ejs', data2template);
});

// set about route
app.get('/about', function(req, res) {
    res.status(200).render('./views/pages/about.html'); // This is OK if you had done "app.engine('html', require('ejs').renderFile);" before
});

// set everything else to error page
app.get('/*', function(req, res) {
    res.status(404).render('./views/pages/error.ejs', { head: { title: 'Error' } });
});

// start express server
var server = app.listen(8015, function() {
    console.log('express app started and listening at http://%s:%s', server.address().address, server.address().port);
});