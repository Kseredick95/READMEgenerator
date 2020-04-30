const inquirer = require("inquirer")
const fs = require("fs")
const axios = require("axios")
const api = require("./utils/api.js")

inquirer.prompt([
    {
        type : "input",
        name : "username",
        message : "What is your github username?"

    }
]).then(answers => {

    const username = answers.username
    api.getUser(username);

})
.catch(error => {
    if(error.isTtyError) {
      console.log(error)
    } else {
    }
});//End prompt

function writeToFile(fileName, data) {
}

function init() {

}

init();
