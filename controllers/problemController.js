Problem = require('../models/problem')

const addProblem = async (req, res) => {
    try {
        const { title, description, timeLimit, memoryLimit, testCases } = req.body;
        const newProblem = new Problem({
            title,
            description,
            timeLimit,
            memoryLimit,
            testCases
        });

        const savedProblem = await newProblems.save();
        res.status(201).json({ message: "problem saved succesfully!!", problem: savedProblem });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to add problem", details: error.message });
    }
};


module.exports = { addProblem };