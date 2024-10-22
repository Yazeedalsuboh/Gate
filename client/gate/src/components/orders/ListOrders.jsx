import React from "react";

import OrderCard from "./OrderCard";

import { Grid2 } from "@mui/material";

import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";

const ListOrders = () => {
	const { list } = useParams();

	const order = useSelector((state) => state.order);

	return (
		<Grid2 container spacing={{ xs: 2 }} sx={{ justifyContent: "center", alignItems: "center", boxShadow: 2, padding: 3 }}>
			{order.loading && <div>Loading...</div>}
			{order.error && !order.loading && <div>{order.error}</div>}
			{order.error && !order.loading && <div>{order.error}</div>}
			{order.lists.length && !order.loading ? order.lists.find((ls) => ls.name === list)?.orders.map((order) => <OrderCard key={order.code} order={order} />) : <div>No Orders</div>}
		</Grid2>
	);
};

export default ListOrders;
