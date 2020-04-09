const api = require("./utils/api.js");


const questions = [
    {
        type: "input",
        name: "githubUsername",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "projectDescription",
        message: "Please describe your project."
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use."
    },
    {
        type: "rawlist",
        name: "license",
        message: "Choose your license",
        choices: ["ISC License (People can do anything with your code with proper attribution)", "MIT License (Simple and Permissive)"]
    },
    {
        type: "input",
        name: "contributors",
        message: "Comma separated list of Github profiles of contributors"
    },
    {
        type: "input",
        name: "contributors",
        message: "Comma separated list of Github profiles of contributors"
    }
];

function writeToFile(fileName, data) {
    
}

function init() {

}

init();
