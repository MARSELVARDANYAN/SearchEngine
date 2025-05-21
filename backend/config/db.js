import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = "mongodb+srv://marseli93:marsel123456@cluster0.5h0bkhl.mongodb.net/searchengine-cluster?retryWrites=true&w=majority&appName=Cluster0&tls=true";

const client = new MongoClient(uri);


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