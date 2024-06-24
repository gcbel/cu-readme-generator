/* DEPENDENCIES */
import { writeFile } from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from "./utils/generateMarkdown.js";

/* VARIABLES */
/* All prompts needed for complete readme. */
const questions = [
    {
        "type": "input",
        "message": "What is the name of your project?",
        "name": "title"
    },
    {
        "type": "input",
        "message": "Please describe the project.",
        "name": "description"
    },
    {
        "type": "input",
        "message": "Please describe the installation instructions for the project.",
        "name": "installation"
    },
    {
        "type": "input",
        "message": "Please describe how to use the project.",
        "name": "usage"
    },
    {
        "type": "list",
        "message": "What license do you want to use for this project?",
        "name": "license",
        "choices": ["No license", "MIT", "ISC", "Apache 2.0", "GNU GPLv2", "GNU GPLv3", "GNU AGPLv3", "GNU LGPLv3", "Mozilla Public 2.0", "Boost Software 1.0", "The Unlicense"]
    },
    {
        "type": "input",
        "message": "Describe any credit you wish to attribute for the work done in this project.",
        "name": "credit"
    },
    {
        "type": "input",
        "message": "Please describe the contribution guidelines for the project.",
        "name": "contributing"
    },
    {
        "type": "input",
        "message": "Please describe the test instructions for the project.",
        "name": "tests"
    },
    {
        "type": "input",
        "message": "Please enter your github username.",
        "name": "github"
    },
    {
        "type": "input",
        "message": "Please enter your email address.",
        "name": "email"
    }
];

/* FUNCTIONS */
/**
 * Generates text content for README file.
 * @param {string} fileName Name of file to input text
 * @param {object} data Information from user prompts
 */
function writeToFile(fileName, data) {
    const license = generateMarkdown(data);

    const content = `
        # ${data.title}
        
        ## Description
        ${data.description} <br>
        ${license[0]}

        ## Table of Contents
        - [Installation](#installation)
        - [Usage](#usage)
        - [Credits](#credits)
        - [License](#license)

        ## Installation
        ${data.installation}

        ## Usage
        ${data.usage}

        ## Credits
        ${data.credit}

        ## License
        ${license[1]}

        ## Contributing
        ${data.contributing}

        ## Tests
        ${data.tests}

        ## Questions
        For my other projects, feel free to visit: https://github.com/${data.github}.\n
        For any other questions, please email me at ${data.email}.
        `
    writeFile(fileName, removeTabs(content), (err) => {
        err ? console.error("Error:", err) : console.log(`Success! Your README is in ${fileName}.`)
    });
}

/**
 * Removes tabs from the content of README file.
 * @param {string} Content Text to be input into readme
 * @return {string} Content without tabs
 */
function removeTabs(content) {
    let result = "";
    const lines = content.split('\n');
    for (const line in lines) {
        result += lines[line].slice(8);
        result += "\n"
    }
    return result;
}

/* INITIALIZERS */
/* Initialize call for user input and readme creation */
function init() {
    inquirer
        .prompt(questions)
        .then((responses) => writeToFile(`${responses.title}_README.md`, responses));
}

/* Function call to initialize app */
init();