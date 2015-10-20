var express = require('express');
var mongoose = require("mongoose");
var jobModel = require("./models/job");

var app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/api/jobs', function(req, res) {
    mongoose.model('Job').find({}).exec(function(error, collection) {
        res.send(collection);
    });
});

app.get('*', function (req, res) {
    res.render('index');
});

// mongoose.connect('mongodb://localhost/jobFinder');
mongoose.connect('mongodb://jobfind:finder@ds041934.mongolab.com:41934/jobfinder');

var con = mongoose.connection;
con.once('open', function() {
    console.log('Connected to mongodb successfully!');
    jobModel.seedJobs();
});



app.listen(process.env.PORT, process.env.IP);

