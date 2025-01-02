// import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();

// // const url = process.env.MONGO;

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO);
//     console.log("MongoDB is connected!");
//   } catch (err) {
//     console.log(err);
//   }
// };

// export default connectDB;
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("MongoDB is connected");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
