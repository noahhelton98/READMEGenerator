// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


//Import genrateMarkdown File

const generateMarkdown = require('./utils/generateMarkdown.js')

console.log(generateMarkdown)


// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([  {
    type: 'input',
    name: 'name',
    message: "What is your GitHub username?",
  },
  {
    type: 'input',
    name: 'email',
    message: "What is your email?",
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide instructions on how to install your project.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Describe the usage of this application.',
  },
  {
    type: 'input',
    name: 'contributors',
    message: 'Did anyone else contribute to this project? If so, what are their GitHub Usernames',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Describe the usage of this application.',
  },
{
    type: 'input',
    name: 'tests',
    message: 'Enter any tests for this application:',
},
]);
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    promptUser()//.then((answers) => console.log(answers)) 

}

// Function call to initialize app
init();
