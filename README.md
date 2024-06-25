# Readme Generator

## Description

For this project, I created command-line README generator. The program prompts a user to input information about their project and allows the user to choose from a number of licenses to protect their project under. Using this input, the program automatically populates a README file which this information pre-formatted. Through this project, I had the opportunity to practice using Node.js.

With a user's input in place of the samples, the completed README will follow this pattern:

![Example README](/assets/images/example_readme.png)

## Installation

The README generator can be run locally by cloning this repository. 

Once the repository has been cloned, the program will require Node.js. To check if you have previously installed Node.js, you can run `node --version`. If Node.js is installed, a version number will appear. If no version number appears, you can download the package [here](https://nodejs.org/en/download/package-manager).

To download the package dependency ([inquirer](https://www.npmjs.com/package/inquirer)), run `npm install`.

## Usage

To generate a README file, this project can be run with the command `node index` or `node index.js`. The terminal will prompt the user for 10 questions that will makeup the content of the file, and the file will automatically appear in the same folder as the index.js, and will be titled `title`_README.md.

![Example README](/assets/images/questions.png)

## Credits

Starter code provided by the Columbia University Bootcamp: https://github.com/coding-boot-camp/potential-enigma <br>
Reference for common licenses: https://choosealicense.com/. <br>
Reference for license badge links: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

## License

Please refer to the license in the repo.
