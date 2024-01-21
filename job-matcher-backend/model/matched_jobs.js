const mongoose = require('mongoose');

const matchedJobsSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        ref: 'User',
        required: true
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    job_id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
    },
    company: {
        type: String,
    },
});

const MatchedJobs = mongoose.model('MatchedJobs', matchedJobsSchema);

module.exports = MatchedJobs;
