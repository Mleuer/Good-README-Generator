const axios = require("axios");

const api = {
  getUser: async function (username) {
    const accessToken = process.env.accessToken;
    const url = `https://api.github.com/users/${username}?access_token=${accessToken}`;
    console.log(url);
    

    const response = await axios.get(`https://api.github.com/users/${username}?access_token=${accessToken}`);
    return response.data;
  }
}



module.exports = api;
