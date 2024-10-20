import React, { useEffect } from "react";
import OrderCard from "./OrderCard";
import { Grid2 } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../features/orderSlice";

const ListOrders = () => {
	const order = useSelector((state) => state.order);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getOrders());
		console.log("order component", order);
	}, []);

	return (
		<Grid2 container spacing={{ xs: 2 }} sx={{ justifyContent: "center", alignItems: "center", boxShadow: 2, padding: 3 }}>
			{order.loading && <div>Loading...</div>}
			{order.error && !order.loading && <div>{order.error}</div>}
			{order.orders.length && !order.loading ? order.orders.map((order) => <OrderCard key={order._id} order={order} />) : <div>no orders</div>}
		</Grid2>
	);
};

export default ListOrders;
