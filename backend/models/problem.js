const mongoose = require('mongoose');

const testCaseSchema = new mongoose.Schema({
    input: {
        type: String,
        required: true,
    },
    expectedOutput: {
        type: String,
        required: true
    },
    isHidden: {
        type: Boolean,
        default: true
    }
});



const problemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    timeLimit: {
        type: Number,
        default: 1
    },
    memoryLimit: {
        type: Number,
        default: 256
    },
    testCases: [testCaseSchema]
}, { timestamps: true });

module.exports = mongoose.model('Problem',problemSchema);