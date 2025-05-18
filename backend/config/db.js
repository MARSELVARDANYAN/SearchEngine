import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);
let db = null;

export async function connectDb() {
    try {
        await client.connect();
        db = client.db(process.env.DB_NAME);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
}

export function getDB() {
  if (!db) {
    throw new Error('Database is not connected yet.');
  }
  return db;
}

export async function closeDB() {
  try {
    await client.close();
    console.log("🛑 MongoDB connection closed");
  } catch (error) {
    console.error("❌ Error closing MongoDB:", error);
  }
}