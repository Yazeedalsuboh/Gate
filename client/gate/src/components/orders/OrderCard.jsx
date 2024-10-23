import { Chip } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteOrder } from "../../features/orderSlice";

const OrderCard = ({ order }) => {
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deleteOrder(order.code));
	};

	const handleClick = (url) => {
		window.open(url, "_blank");
	};

	return <Chip label={order.code} onClick={() => handleClick(order.url)} onDelete={handleDelete} variant='outlined' sx={{ fontSize: 18, cursor: "pointer" }} />;
};

export default OrderCard;
