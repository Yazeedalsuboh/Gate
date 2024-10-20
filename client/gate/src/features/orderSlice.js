import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	loading: false,
	orders: [],
	error: "",
};

export const getOrders = createAsyncThunk("orders/get", async () => {
	const response = await axios.get("http://localhost:4000/api/order");
	return response.data;
});

export const addOrders = createAsyncThunk("orders/add", async (order) => {
	const response = await axios.post("http://localhost:4000/api/order", order);
	return response.data;
});

export const deleteOrders = createAsyncThunk("orders/delete", async (code) => {
	const response = await axios.delete(`http://localhost:4000/api/order/${code}`);
	return { code }; // Only returning the code to use in reducer
});

export const orderSlice = createSlice({
	name: "order",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(getOrders.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getOrders.fulfilled, (state, action) => {
			state.loading = false;
			state.error = "";
			state.orders = action.payload.orders;
		});
		builder.addCase(getOrders.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message || "Failed to fetch orders";
			state.orders = [];
		});
		builder.addCase(addOrders.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(addOrders.fulfilled, (state, action) => {
			state.loading = false;
			state.error = "";
			state.orders.push(action.payload.order);
		});
		builder.addCase(addOrders.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message || "Failed to add order";
		});
		builder.addCase(deleteOrders.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(deleteOrders.fulfilled, (state, action) => {
			state.loading = false;
			state.error = "";
			state.orders = state.orders.filter((ele) => ele.code !== action.payload.code);
		});
		builder.addCase(deleteOrders.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message || "Failed to delete order";
		});
	},
});

export default orderSlice.reducer;
