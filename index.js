const api = require("./utils/api.js");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');
require('dotenv').config();






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
        name: "badgeLabel",
        message: "What would you like your badge to say?"
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
        type: "checkbox",
        name: "tableOfContents",
        message: "Which of the following would you like included in the Table of Contents?",
        choices: ["Installation", "Usage", "License", "Contributing", "Tests", "Questions"]
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

async function init() {
    const answers = await inquirer.prompt(questions);
    console.log(answers);
    const user = await api.getUser(answers.githubUsername);
    const markDown = generateMarkdown(user, answers);
    writeToFile("README.md", markDown);
}

init();
