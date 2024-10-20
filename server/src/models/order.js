import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
	{
		code: {
			type: String,
			required: true,
			unique: true,
		},
		url: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
