const fs = require("fs");
const path = require('path'); 
const inquirer = require("inquirer");
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
        message: "Please provide a brief description of your project",
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
        message: "Please choose a license for your project",
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
        message: "Please list any contributors",
    },
    {
        type: "input",
        name: "tests",
        message: "Please list any tests for this project",
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(answers) => {
        writeToFile("SampleREADME.md", answers)
    })
}

// function call to initialize program
init();

