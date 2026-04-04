const { executeCode } = require('../utils/executeCode')

const runCode = async (req, res) => {
    try {
        const { language, code, input } = req.body;
        if (!language || !code) {
            return res.status(400).json({ error: "Language and code are required!" });
        }
        const executionResult = await executeCode(language, code, input);


        res.status(200).json({
            message: "Code executed successfully",
            output: executionResult
        });

    }
    catch (error) {
        console.log("error in the runController!!");
        res.status(500).json({ error: "Failed to execute code", details: error.message });
    }
};

module.exports = { runCode };