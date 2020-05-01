const axios = require("axios");

const api = {

  getUser(username) {

    const queryURL = `https://api.github.com/users/${username}`;


    axios.get(queryURL).then(function (res){

      const email = res.data.email;
      
      const avatar = res.data.avatar_url;

      return(email , avatar);
    })
  }

};

module.exports = api;
