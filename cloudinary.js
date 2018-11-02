// Online reference and documentation: https://cloudinary.com/documentation/node_integration

// Listed in package.json, npm install to install
const cloudinary = require("cloudinary");

// This file contains api credentials and is .gitignore
// Obtain your own keys
const config = require("./config.json");
/*
This is what the file looks like
{
  "cloudinary": {
    "cloud_name": "mycloudname",
    "api_key": "999999999999999",
    "api_secret": "HpJskdjIs-djKjsds-Jksdjksds-random"
  }
}
*/

// Configures cloudinary
cloudinary.config({
  cloud_name: config.cloudinary.cloud_name,
  api_key: config.cloudinary.api_key,
  api_secret: config.cloudinary.api_secret
});

console.log("============Waiting for file to upload============");

// Upload an image to the account and store it in the uploadedImage variable
const uploadedImage = cloudinary.v2.uploader
  .upload(
    "https://res.cloudinary.com/demo/image/upload/w_100,h_150,c_fill/sample.jpg",
    function(error, result) {
      if (error) throw new error("Error uploading file.");

      console.log(
        "============This is what the uploaded object looks like============"
      );

      // Lets take a look at the result object
      console.log("result:", result);

      // IMPORTANT: This is the cloudinary public_id that will need to be stored to our local database for reference
      console.log(
        "This is the public_id to be stored to the post collection:",
        result.public_id
      );
    }
  )
  .then(() => {
    // This is a sample of a standard request configruation to cloudinary. This will be defined once and used for all posts.
    const cloudinaryTransformation = {
      border: "2px_solid_rgb:000000",
      flags: "awebp",
      gravity: "center",
      height: 400,
      quality: "auto",
      radius: 14,
      width: 400,
      crop: "fill",
      format: "webp"
    };

    // We get "sample" from the posts table which is the cloudinary id then pass it the transformation configuration.
    const cloudinaryUrl = cloudinary.url("sample", cloudinaryTransformation); // This will return a URL that we can serve in one of our routes.
    console.log("url: ", cloudinaryUrl);
  });
