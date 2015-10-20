var mongoose = require("mongoose");
var jobSchema = mongoose.Schema({
    title: {type: String},
    description: {type: String}
});

var Job = mongoose.model('Job', jobSchema);

exports.seedJobs = function(callback) {
    Job.find({}).exec(function(error, collection) {
        if (collection.length === 0) {
            Job.create({title: 'Cook', description: 'You will be making bread!'});
            Job.create({title: 'Waiter', description: 'You will hate us!'});
            Job.create({title: 'Pirate', description: 'You will be hunting seas!'});
            Job.create({title: 'Axe maker', description: 'You will be making axes!'}, callback);
        }
    });
}