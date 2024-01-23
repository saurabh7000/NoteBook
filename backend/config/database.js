const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedtopology: true,
    })
    .then((data) => {
      console.log(`MongoDB connected with ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
