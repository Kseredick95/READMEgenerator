const inquirer = require("inquirer")
const fs = require("fs")
const api = require("./utils/api.js")
const generateMarkdown = require("./utils/generateMarkdown.js")

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
        type : "input",
        name : "usage",
        message : "How is the code used?"
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
]).then(data => {

    const username = data.username
    api.getUser(username);

    generateMarkdown(data);

    writeToFile(fileName);

})
    .catch(error => {
        if (error.isTtyError) {
            console.log(error)
        } else {
        }
    });//End prompt

function writeToFile(fileName, data) {

}

function init() {
    
}

init();
