const inquirer = require("inquirer")
const fs = require("fs")
const getUser = require("./utils/getUser.js")
const generateMarkdown = require("./utils/generateMarkdown.js")
const axios = require("axios");


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

    const fileName = generateMarkdown(answers, data);

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
