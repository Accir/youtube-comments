import mongoose, { Connection } from "mongoose";

let connection = {} as Connection;

const dbConnection = async () => {
  if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
  }

  if (connection?.readyState) {
    return;
  }
  const db = await mongoose.connect(`${process.env.MONGODB_URI}`);
  connection = db.connection;
};

export default dbConnection;
