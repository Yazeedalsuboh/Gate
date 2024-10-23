import { List, Order } from "../models/list.js";
// Flag
export const getAll = async (req, res) => {
	try {
		const lists = await List.find();
		return res.status(200).json({ lists });
	} catch (error) {
		return res.status(500).json({ message: "Server error", error });
	}
};

export const getList = async (req, res) => {
	const { list } = req.params;
	try {
		const existingList = await List.findOne({ name: list });
		if (!existingList) {
			return res.status(404).json({ message: "List not found" });
		}
		return res.status(200).json({ list: existingList });
	} catch (error) {
		return res.status(500).json({ message: "Server error", error });
	}
};

export const addOrder = async (req, res) => {
	const { code, url, name } = req.body;
	try {
		let list = await List.findOne({ name });
		if (!list) {
			const { name } = req.body;

			if (!name) {
				return res.status(400).json({ message: "Name, emojie, and orders are required" });
			}

			list = new List({
				name,
			});

			await list.save();
		}

		const newOrder = new Order({ code, url });

		list.orders.push(newOrder);

		await list.save();

		return res.status(201).json({
			message: "Order added successfully",
			list: list,
		});
	} catch (error) {
		if (error.code === 11000) {
			return res.status(400).json({ message: "Code must be unique" });
		}
		return res.status(500).json({ message: "Server error", error });
	}
};

export const deleteOrder = async (req, res) => {
	try {
		const { code } = req.params;

		const updatedList = await List.findOneAndUpdate({ "orders.code": code }, { $pull: { orders: { code } } }, { new: true });

		if (!updatedList) {
			return res.status(404).json({ message: "Order with the specified code not found in any list" });
		}

		res.status(200).json({
			message: `Order with code ${code} has been deleted`,
			list: updatedList,
		});
	} catch (error) {
		res.status(500).json({ message: "Server error", error });
	}
};
