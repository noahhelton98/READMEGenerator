// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'None'){
    return ''
  }else if (license == 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }else if (license == 'GNU'){
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }else {
    return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let output = `
  # ${data.title} \n
  ## Table of Contents \n
  1. [Description](https://github.com/${data.name}/READMEGenerator#Description)
  2. [Installion](https://github.com/${data.name}/READMEGenerator#Installion)
  3. [Usage](https://github.com/${data.name}/READMEGenerator#Usage)
  4. [Licenses](https://github.com/${data.name}/READMEGenerator#Licenses)
  5. [Contibutors](https://github.com/${data.name}/READMEGenerator#Contibutors)
  6. [Questions](https://github.com/${data.name}/READMEGenerator#Questions)
  
  ## [Description](#Description)
  ${data.description}\n
  ## [Installion](#Installion)
  ${data.installation}\n
  ## [Usage](#Usage)
  ${data.usage}\n
  ## [Licenses](#Licenses)
  ${renderLicenseSection(data.license)}\n
  ## [Contributors](#Contributors)
  ${data.contributors} \n
  ## [Questions?](#Questions)
  Email me at ${data.email} or check out my [GitHub](https://github.com/${data.name})
`;
return output
}

module.exports = generateMarkdown;
