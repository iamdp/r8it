// To build our initial database, we'll need a list of files currently on cloudinary. Further to this, we'll need to associate at minimum a category to the content for comparison.

const cloudinary = require("cloudinary");
const config = require("./config.json");

cloudinary.config({
  cloud_name: config.cloudinary.cloud_name,
  api_key: config.cloudinary.api_key,
  api_secret: config.cloudinary.api_secret
});

const publicIds = [];

cloudinary.v2.api
  .resources({ max_results: 100 }, function(error, images) {
    console.log(images);
    images.resources.forEach(image => {
      publicIds.push(image.public_id);
    });
  })
  .then(() => {
    console.log(publicIds);
  });
