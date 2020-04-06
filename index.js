require('dotenv').config();
const request = require('request');

let apiKey = process.env.API_KEY;
let city = 'northbrook';
let unitType = 'imperial'
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unitType}`;

request(url, function (err, response, body) {
    if(err){
      console.log('error:', error);
    } else {
      let weather = JSON.parse(body);
      let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
      console.log(message);
    }
});