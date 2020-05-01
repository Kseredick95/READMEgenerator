function generateMarkdown(answers , data, badges) {
  
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
* [Questions](#questions)
* [Badges](#badges)

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

## Badges
${badges}
`;
}

module.exports = generateMarkdown;
