
const executeCode = async (language, code, input = "") => {
    // 1. Map our languages to their EXACT compiler identifiers from the docs
    const languageMap = {
        "python": "python-3.14",
        "c++": "g++-15",
        "cpp": "g++-15",
        "c": "gcc-15",
        "java": "openjdk-25",
        "javascript": "typescript-deno" 
    };

    const compilerName = languageMap[language.toLowerCase()];
    if (!compilerName) {
        throw new Error("Unsupported language selected.");
    }

    // 2. Format the payload exactly as the docs require
    const payload = {
        compiler: compilerName,
        code: code,
        input: input
    };

    try {
        // 3. Use the newly released SYNC endpoint for instant results
        const response = await fetch("https://api.onlinecompiler.io/api/run-code-sync/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // Pass the API key exactly as documented
                "Authorization": process.env.ONLINE_COMPILER_KEY 
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        
        // 4. Return the data cleanly for our controller to use
        return {
            stdout: data.output || "",
            stderr: data.error || "",
            time: data.time || "0",
            memory: data.memory || "0",
            success: data.exit_code === 0 
        };

    } catch (error) {
        console.error("OnlineCompiler API Error:", error);
        throw new Error("Execution engine failed");
    }
};

module.exports = { executeCode };