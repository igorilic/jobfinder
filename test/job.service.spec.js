var express = require("express");
var app = express();
var expect = require("chai").expect;
var request = require("supertest");
var dataSavedJob;
var db = {
    saveJob: function(job) {
        dataSavedJob = job;
    }
};
var jobsService = require('../jobs-service')(db, app);

describe('save jobs', function() {
    it('should validate that title is greater than 4 chars');
    it('should validate that title is less than 40 chars');
    it('should validate that description is greater than 4 chars');
    it('should validate that description is less than 250 chars');
    
    
    var newJob = {title: 'Cook', description: 'You will be making bread!'};
    
    it('should pass the job to the database save', function(done) {
        request(app).post('/api/jobs').send(newJob).end(function(err, res) {
            expect(dataSavedJob).to.deep.equal(newJob);
            done();
        });
    });
    it('should return a status od 200 to the front end if the db saved');
    it('should return a job with an id');
    it('should return an error if the database failed');
});