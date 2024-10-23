import React, { useEffect } from "react";

import OrderCard from "./OrderCard";

import { Grid2 } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";

import { useParams } from "react-router-dom";
import { orderSlice } from "../../features/orderSlice";

const ListOrders = () => {
	const dispatch = useDispatch();
	const { list } = useParams();

	const order = useSelector((state) => state.order);

	useEffect(() => {
		dispatch(orderSlice.actions.ordersByList(list));
	}, [order.loading]);

	return (
		<Grid2 container spacing={{ xs: 2 }} sx={{ justifyContent: "center", alignItems: "center", boxShadow: 2, padding: 3 }}>
			{order.loading && <div>Loading...</div>}
			{order.error && !order.loading && <div>{order.error}</div>}
			{order.error && !order.loading && <div>{order.error}</div>}
			{order.lists.length && !order.loading ? order.orders.map((order) => <OrderCard key={order.code} order={order} />) : <div>No Orders</div>}
		</Grid2>
	);
};

export default ListOrders;
