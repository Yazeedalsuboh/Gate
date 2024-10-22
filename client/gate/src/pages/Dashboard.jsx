import React, { useEffect, useState } from "react";

import { Grid2, TextField } from "@mui/material";
import SideMenu from "../components/main/SideMenu";
import { Outlet } from "react-router-dom";
import ListsMenu from "../components/main/ListsMenu";

import { useSelector, useDispatch } from "react-redux";
import { getLists } from "../features/orderSlice.js";

const Dashboard = () => {
	const [code, setCode] = useState("");
	const lists = useSelector((state) => state.order);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getLists());
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		const foundOrder = lists.lists.find((list) => list.orders.find((order) => order.code === code))?.orders.find((order) => order.code === code);

		if (foundOrder) {
			window.open(foundOrder.url, "_blank");
			setCode("");
		} else {
			console.log("Order not found");
		}
	};

	return (
		<Grid2 container spacing={{ xs: 2 }} height='100vh' sx={{ marginTop: 3 }}>
			<Grid2 container item size={{ xs: 1 }} direction='column' sx={{ justifyContent: "center", alignItems: "center" }}>
				<SideMenu />
			</Grid2>
			<Grid2 container item size={{ xs: 11 }} direction='column' sx={{ justifyContent: "flex-start", alignItems: "center" }}>
				<ListsMenu />
				<form onSubmit={handleSubmit}>
					<TextField id='' label='Code' value={code} onChange={(e) => setCode(e.target.value)} />
				</form>
				<Outlet />
			</Grid2>
		</Grid2>
	);
};

export default Dashboard;
