/* DEPENDENCIES */
const {writeFile} = require("fs");
const inquirer = require("inquirer");

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
        "type": "input",
        "message": "Please describe the contribution guidelines for the project.",
        "name": "contributing"
    },
    {
        "type": "input",
        "message": "Please describe the test instructions for the project.",
        "name": "tests"
    }
];

/* FUNCTIONS */
/**
 * Generates text content for README file.
 * @param {string} fileName Name of file to input text
 * @param {} data Information from user prompts
 */
function writeToFile(fileName, data) {
    console.log(data);
    content = `
        # ${data.title}
        
        ## Description
        ${data.description}
        
        ## Installation
        ${data.installation}
        
        ## Installation
        ${data.installation}

        ## Usage
        ${data.usage}

        ## Contributing
        ${data.contributing}

        ## Tests
        ${data.tests}
        `
    writeFile(filename, content, (err));
}

/* INITIALIZERS */
/* Initialize call for user input and readme creation */
function init() {
    inquirer
        .prompt(questions)
        .then((responses) => writeToFile("mini_README.md", responses));
}

/* Function call to initialize app */
init();