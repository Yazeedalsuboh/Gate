import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	loading: false,
	error: "",
	lists: [],
	orders: [],
	url: "",
};

export const getLists = createAsyncThunk("orders/lists", async () => {
	const response = await axios.get(`http://localhost:4000/api/list`);
	return response.data.lists;
});

export const addOrders = createAsyncThunk("orders/add", async (order) => {
	const response = await axios.post("http://localhost:4000/api/list/order", order);
	return response.data;
});

export const deleteOrder = createAsyncThunk("orders/delete", async (code) => {
	const response = await axios.delete(`http://localhost:4000/api/list/order/${code}`);
	return { data: response.data, code };
});

export const orderSlice = createSlice({
	name: "order",
	initialState,
	reducers: {
		ordersByList: (prevState, action) => {
			console.log("ordersByList", prevState.lists);
			const selectedList = prevState.lists.find((ls) => ls.name === action.payload);
			if (selectedList) {
				prevState.orders = selectedList.orders || [];
			} else {
				prevState.orders = [];
			}
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getLists.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getLists.fulfilled, (state, action) => {
			state.loading = false;
			state.error = "";
			state.lists = action.payload;
		});
		builder.addCase(getLists.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message || "Failed to fetch orders";
			state.lists = [];
		});
		builder.addCase(addOrders.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(addOrders.fulfilled, (state, action) => {
			state.loading = false;
			state.error = "";
		});
		builder.addCase(addOrders.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message || "Failed to add order";
		});
		builder.addCase(deleteOrder.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(deleteOrder.fulfilled, (state, action) => {
			const code = action.payload.code;
			state.loading = false;
			state.error = "";
			state.orders = state.orders.filter((order) => order.code === code);
		});
		builder.addCase(deleteOrder.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message || "Failed to delete order";
		});
	},
});

export default orderSlice.reducer;
