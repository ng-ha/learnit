const mongoose = require('mongoose');

const dbUri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@app-learnit.8ssubr2.mongodb.net/?retryWrites=true&w=majority`;

mongoose.set('strictQuery', false);

const connectDB = async () => {
  try {
    await mongoose.connect(dbUri);
    console.log(`MongoDB connected !!!`);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
module.exports = connectDB;
