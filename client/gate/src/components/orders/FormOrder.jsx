import React, { useState } from "react";

import { Grid2, TextField, Button, Typography } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";

import { addOrders } from "../../features/orderSlice";

const FormOrder = () => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.order);

	const [order, setOrder] = useState({
		code: "",
		url: "",
		name: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(addOrders(order));
		setOrder({
			code: "",
			url: "",
			name: "",
		});
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setOrder((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return (
		<form onSubmit={handleSubmit} autoComplete='off'>
			<Grid2 container spacing={2} direction='column' sx={{ justifyContent: "center", alignItems: "center", boxShadow: 2, padding: 3 }}>
				<Typography variant='h6' color='initial'>
					Add Order
				</Typography>
				<Grid2 item xs={12}>
					<TextField label='Order Code' name='code' value={order.code} onChange={handleChange} variant='outlined' fullWidth required />
				</Grid2>
				<Grid2 item xs={12}>
					<TextField label='Order Url' name='url' value={order.url} onChange={handleChange} variant='outlined' fullWidth required />
				</Grid2>
				<Grid2 item xs={12}>
					<TextField label='List Name' name='name' value={order.name} onChange={handleChange} variant='outlined' fullWidth required />
				</Grid2>
				<Grid2 item xs={12}>
					<Button variant='outlined' color='primary' type='submit' fullWidth>
						Add Order
					</Button>
				</Grid2>
			</Grid2>
		</form>
	);
};

export default FormOrder;
