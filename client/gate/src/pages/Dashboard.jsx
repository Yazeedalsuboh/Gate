import React from "react";

import { Grid2 } from "@mui/material";
import SideMenu from "../components/main/SideMenu";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
	return (
		<Grid2 container spacing={{ xs: 2 }} height='100vh'>
			<Grid2 container item size={{ xs: 1 }} direction='column' sx={{ justifyContent: "center", alignItems: "center" }}>
				<SideMenu />
			</Grid2>
			<Grid2 container item size={{ xs: 11 }} direction='column' sx={{ justifyContent: "center", alignItems: "center" }}>
				<Outlet />
			</Grid2>
		</Grid2>
	);
};

export default Dashboard;
