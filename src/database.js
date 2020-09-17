const mongoose = require("mongoose");

const URI = process.env.MONGOLAB_URI
  ? process.env.MONGOLAB_URI
  : "mongodb://localhost:27017/mernDb";

mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.info("DB is connected successfully");
});
