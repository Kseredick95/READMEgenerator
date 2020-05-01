const axios = require("axios");

async function getUser(username) {
    const queryURL = `https://api.github.com/users/${username}`;

    const info = await axios.get(queryURL).then(function (res){
      
      return res.data; 
    }).catch(err => console.log (err))

  return info;
};

module.exports = getUser;