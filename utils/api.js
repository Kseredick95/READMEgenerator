const axios = require("axios");
const generateMarkdown = require("./generateMarkdown.js")

const api = {

  getUser(username) {

    const queryURL = `https://api.github.com/users/${username}`;

    console.log(username)

    axios.get(queryURL).then(function (res){

      const email = res.data.email;
      
      const avatar = res.data.avatar_url;

      generateMarkdown(email, avatar);
    })
  }
};

module.exports = api;
