var express = require('express');

var jobModel = require("./models/job");
var jobsData = require("./jobs-data");

var app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/api/jobs', function(req, res) {
    jobsData.findJobs().then(function(collection) {
        res.send(collection);
    });
});

app.get('*', function (req, res) {
    res.render('index');
});

// mongoose.connect('mongodb://localhost/jobFinder');
jobsData
    .connectDb('mongodb://jobfind:finder@ds041934.mongolab.com:41934/jobfinder')
    .then(function() {
        console.log('Connected to mongodb successfully!');
        jobsData.seedJobs();
    });


app.listen(process.env.PORT, process.env.IP);

