import mongoose from "mongoose";
import { DB_URL } from "../secrets.js";

export const connect = async () => {
	try {
		await mongoose.connect(DB_URL);
		console.log("Connected to Mongo DB");
	} catch (error) {
		console.error("Count not connect to Mongo DB");
		process.exit(1);
	}
};
