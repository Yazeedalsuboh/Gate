import { Chip } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
// import { deleteOrders } from "../../features/orderSlice";

const OrderCard = ({ order }) => {
	// const dispatch = useDispatch();

	// const handleDelete = (code) => {
	// 	dispatch(deleteOrders(code));
	// };

	const handleClick = (url) => {
		window.open(url, "_blank");
	};

	return <Chip label={order.code} onClick={() => handleClick(order.url)} variant='outlined' sx={{ fontSize: 18, cursor: "pointer" }} />;
};

export default OrderCard;
