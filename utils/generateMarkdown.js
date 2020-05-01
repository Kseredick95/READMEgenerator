function generateMarkdown(data) {
  console.log(data)
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Test](#test)

## Installation
${data.install}

## Usage
${data.usage}

## License
${data.license}

## Contributors
${data.contributors}

## Test
${data.test}

`;
}

module.exports = generateMarkdown;
