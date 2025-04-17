import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);
  //console.log("I am mongoose");

  if (connected) {
    //console.log("MongoDB is already connected");
    return;
  }

  //if not connected, we need to connect to MongoDB.
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
