// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let output = `# ${data.title} \n
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
    ${data.license}\n
    ## [Contributors](#Contributors)
    ${data.contributors} \n
    ## [Questions?](#Questions)
    Email me at ${data.email} or check out my [GitHub](https://github.com/${data.name})
`;

console.log(output);
return output
}

module.exports = generateMarkdown;
