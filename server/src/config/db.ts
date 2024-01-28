import mongoose, { ConnectOptions } from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(
        "mongodb+srv://moye:moye@cluster0.eskybbf.mongodb.net/" as string,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions
    );
    console.log("Db connected");
  } catch (error: any) {
    console.log(error.message);
  }
};

export default connectDB;
