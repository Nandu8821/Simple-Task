import mongoose from "mongoose";

const database = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URl);
    console.log("Connected to database");
  } catch (err) {
    console.log(err);
  }
};

export default database;
