const { Configuration, OpenAIApi } = require("openai");
const { exec } = require("child_process");
const fs = require("fs");

// Configure OpenAI API
const configuration = new Configuration({
  apiKey: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  // Replace with your API key
});
const openai = new OpenAIApi(configuration);

// Helper function to execute terminal commands
function runCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(`Error: ${stderr}`);
      } else {
        resolve(stdout.trim());
      }
    });
  });
}

// Main agent function
async function agent() {
  try {
    // Example Task: Read the current Git status
    const gitStatus = await runCommand("git status");
    console.log("Git Status:\n", gitStatus);

    // Ask OpenAI for advice
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `You are a development assistant. Here is the current Git status:\n${gitStatus}\nWhat should I do next?`,
      max_tokens: 200,
    });

    const advice = response.data.choices[0].text.trim();
    console.log("AI Advice:\n", advice);

    // Example: Auto-commit and push changes if suggested
    if (advice.includes("commit")) {
      await runCommand('git add .');
      await runCommand('git commit -m "Auto-commit by embedded agent"');
      await runCommand('git push origin main');
      console.log("Changes committed and pushed.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

agent();
