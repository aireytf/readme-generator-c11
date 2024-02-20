const fs = require("fs");
const path = require('path'); 
const inquirer = require("inquirer");

// Import 'util' module to use promisify
const util = require('util');

// Use 'promisify' to set up use of async/await for function to write README
const writeFileAsync = util.promisify(fs.writeFile);

const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a brief description of your project:",
    },
    {
        type: "input",
        name: "installation",
        message: "How is your application installed?",
    },
    {
        type: "input",
        name: "usage",
        message: "How is your application used?",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please choose a license for your project:",
        choices: ["MIT", "GPL V3", "Apache 2.0", "Mozilla Public 2.0"],
    },
    {
        type: "input",
        name: "GitHubUser",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "contributing",
        message: "Please list any guidelines for others contributing to your project:",
    },
    {
        type: "input",
        name: "tests",
        message: "Please list any testing strategy/instructions for this project:",
    },
];

// function to write README file
const writeToFile = async (fileName, data) => {
    try {
        const markdown = generateMarkdown(data);

        await writeFileAsync(fileName, markdown);

        console.log("ReadMe completed!");
    } catch (err) {
        console.error(err);
    }
};

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        writeToFile("README.md", answers)
    })
};

// function call to initialize program
init();

