const inquirer = require("inquirer")
const fs = require("fs")
const getUser = require("./utils/getUser.js")
const generateMarkdown = require("./utils/generateMarkdown.js")
const axios = require("axios");


const {renderBadges} = require("badges")
 
// Listing of badges to output
const list = [
    // Development Badges
    'npmversion',
    'npmdownloads',
]
 
// Configuration for the badges
const config = {
    npmPackageName: 'badges',
 
    saucelabsUsername: 'bevry',
    
}

// Options for rendering the badges
const options = {
    // Filter Category
    // When set to a string, will only render badges from the list that of the specified category
    // Values can be 'development', 'testing', 'funding', or 'social'
    // E.g. to render only funding badges, set to 'funding'
    filterCategory: false,
 
    // Filter Scripts
    // When true, do not render any badges from the list that are scripts
    filterScripts: false,
}

const result = renderBadges(list, config, options)


inquirer.prompt([
    {
        type: "input",
        name: "username",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a description:"
    },
    {
        type: "input",
        name: "install",
        message: "What is needed for installation?"
    },
    {
        type: "input",
        name: "usage",
        message: "How is the code used?"
    },
    {
        type: "input",
        name: "license",
        message: "What is the license?"
    },
    {
        type: "input",
        name: "contributors",
        message: "Who are the contributors?"
    },
    {
        type: "input",
        name: "test",
        message: "Which program is used for testing?"
    }
]).then(async function (answers) {

    const data = await getUser(answers.username)

    const fileName = generateMarkdown(answers, data, result);

    writeToFile(fileName)
})
    .catch(error => {
        if (error.isTtyError) {
            console.log(error)
        } else {
        }
    });//End prompt

function writeToFile(fileName) {
    fs.writeFile("README.md", fileName, "utf8", function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success")
    })
}
