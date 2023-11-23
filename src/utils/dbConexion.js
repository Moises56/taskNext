import { connect, connection } from "mongoose";

const conn = {
  isConnected: false,
};

export async function connectDB() {
  if (conn.isConnected) {
    return;
  }

    const db = await connect(
      process.env.MONGODB_URI || "mongodb+srv://uga:uga456@cluster0.rgl68zc.mongodb.net/uga?retryWrites=true&w=majority"
    );
    // console.log(db.connection.db.databaseName);
    conn.isConnected = db.connections[0].readyState;
  }
  
  connection.on("connected", () => console.log("Mongodb connected to db"));
  
  connection.on("error", (err) => console.error("Mongodb Errro:", err.message));
