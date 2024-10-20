import { Order } from "../models/order.js";

// Add an order
export const add = async (req, res) => {
	const { code, url } = req.body;

	try {
		const newOrder = new Order({ code, url });
		await newOrder.save();
		return res.status(201).json({ message: "Order added successfully", order: newOrder });
	} catch (error) {
		if (error.code === 11000) {
			return res.status(400).json({ message: "Code must be unique" });
		}
		return res.status(500).json({ message: "Server error", error });
	}
};

// Get all orders
export const getAll = async (req, res) => {
	try {
		const orders = await Order.find();
		return res.status(200).json({ orders });
	} catch (error) {
		return res.status(500).json({ message: "Server error", error });
	}
};

export const delByCode = async (req, res) => {
	const { code } = req.params;

	try {
		const order = await Order.findOneAndDelete({ code });

		if (!order) {
			return res.status(404).json({ message: "Order not found" });
		}

		return res.status(200).json({ message: "Order deleted successfully", code });
	} catch (error) {
		return res.status(500).json({ message: "Server error", error });
	}
};
