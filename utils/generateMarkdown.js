function generateMarkdown(answers , data) {
  
  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Test](#test)

## Installation
${answers.install}

## Usage
${answers.usage}

## License
${answers.license}

## Contributors
${answers.contributors}

## Test
${answers.test}

## Questions
Contact author at this email : ${data.email}

![Alt text](${data.avatar_url})

`;
}

module.exports = generateMarkdown;
