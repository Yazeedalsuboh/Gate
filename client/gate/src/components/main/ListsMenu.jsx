import React, { useEffect } from "react";

import { IconButton, Grid2 } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { getLists } from "../../features/orderSlice";

const ListsMenu = () => {
	const lists = useSelector((state) => state.order);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getLists());
	}, []);

	return (
		<Grid2 container item spacing={{ xs: 4 }} sx={{ boxShadow: 2, padding: 1, borderRadius: 10 }}>
			{lists.lists.map((ele) => (
				<IconButton aria-label='info' sx={{ fontSize: 18 }} LinkComponent='a' key={ele.name} href={`/${ele.name}`}>
					{ele.name}
				</IconButton>
			))}
		</Grid2>
	);
};

export default ListsMenu;
