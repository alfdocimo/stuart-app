const path = require("path");

require("dotenv").config();
module.exports = {
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
  },
  sassOptions: {
    includePaths: [
      path.join(__dirname, "styles"),
      path.join(__dirname, "components"),
    ],
  },
};
