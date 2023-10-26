const request = require('request');
const inspect = require('util').inspect; // <= add this line
const args = process.argv;
const words = args.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${words[0]}`, function(error, response, body) {
  if (error) {
    console.error('error:', error); // Print the error if one occurred
    process.exit(1);
  }
  if (body[0] === "[" && body[1] === "]") {
    console.log("ERROR: Cat not found.");
    process.exit(1);
  }
  const data = JSON.parse(body);
  console.log(inspect(data[0].description));
});


