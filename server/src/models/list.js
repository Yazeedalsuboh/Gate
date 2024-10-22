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
			unique: true,
		},
	},
	{ timestamps: true }
);

const listSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
		orders: {
			type: [orderSchema],
			default: [],
		},
	},
	{ timestamps: true }
);

export const List = mongoose.model("List", listSchema);
export const Order = mongoose.model("Order", orderSchema);
