import { Grid2, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addOrders } from "../../features/orderSlice";

const FormOrder = () => {
	const dispatch = useDispatch();

	const [order, setOrder] = useState({
		code: "",
		url: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addOrders(order));
		setOrder({
			code: "",
			url: "",
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
				<Grid2 item xs={12}>
					<TextField label='Code' name='code' value={order.code} onChange={handleChange} variant='outlined' fullWidth required />
				</Grid2>
				<Grid2 item xs={12}>
					<TextField label='Url' name='url' value={order.url} onChange={handleChange} variant='outlined' fullWidth required />
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
