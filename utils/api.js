const axios = require("axios");

const api = {
  getUser: function(username) {
    const accessToken = "3c6c2dfb3a3b8c8e741d31f9796e78aedc7625e6";
    axios.get(`https://api.github.com/users/${username}?access_token=${accessToken}`)
    .then(function(response) {
      console.log(response.data);
    })
  }
};

module.exports = api;
