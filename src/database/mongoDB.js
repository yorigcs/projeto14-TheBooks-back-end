import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017";
let mongoDB = null;
const mongoClient = new MongoClient(mongoURI);

try {
    await mongoClient.connect()
    mongoDB = mongoClient.db(process.env.MONGO_DB);
    console.log("Connected to MongoDB successfully!")
} catch (err) {
    console.error("Failed to connect to Mongo", err);
}

export default mongoDB;