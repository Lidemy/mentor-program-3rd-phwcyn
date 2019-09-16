const request = require('request');

const url = {
  url: 'https://api.twitch.tv/helix/games/top',
  headers: {
    'Client-ID': 'a6enr2xbwbe99rl8kd6ux2k82l1se5',
  },
};

function callback(error, response, body) {
  if (!error && response.statusCode === 200) {
    const json = JSON.parse(body);
    console.log(json.data);
    json.data.forEach((item) => {
      console.log(`${item.id}  ${item.name}`);
    });
  }
}

request(url, callback);
