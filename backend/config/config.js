const mongoose = require("mongoose");
require("colors");

//connecDB Function

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected ${conn.connection.host}`.bgMagenta);
  } catch (error) {
    console.log(`Error : ${error.message}`.bgRed);
    process.exit(1);
  }
};

//export
module.exports = connectDb;
