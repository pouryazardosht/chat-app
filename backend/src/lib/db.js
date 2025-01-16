import mongoose from "mongoose";

export const connectDB = async () => {
  const clientOptions = {
    serverApi: { version: "1", strict: true, deprecationErrors: true },
  };

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, clientOptions);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
