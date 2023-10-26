const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    if (error) {
      return callback(error, null);
    }
    if (body[0] === "[" && body[1] === "]") {
      return callback(error, null);

    }
    const data = JSON.parse(body);
    // console.log(inspect(data[0].description));
    return callback(error, data[0].description);
  });
};

module.exports = { fetchBreedDescription };