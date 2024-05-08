import { connect } from "mongoose";

const connectDB = async () => {
  try {
    const mongoURI: string = "mongodb://localhost:27017/bookDb";
    await connect(mongoURI);
    console.log("MongoDB Connected...");
  } catch (err:any) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB();