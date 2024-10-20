import { Stack, IconButton } from "@mui/material";
import React from "react";

import RoofingIcon from "@mui/icons-material/Roofing";
import AddIcon from "@mui/icons-material/Add";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

const SideMenu = () => {
	return (
		<Stack spacing={{ xs: 4 }} sx={{ boxShadow: 2, padding: 2, borderRadius: 10 }}>
			<IconButton aria-label='home' LinkComponent='a' href='/'>
				<RoofingIcon />
			</IconButton>
			<IconButton aria-label='add' LinkComponent='a' href='/add'>
				<AddIcon />
			</IconButton>
			<IconButton aria-label='info' LinkComponent='a' href='/info'>
				<QuestionMarkIcon />
			</IconButton>
		</Stack>
	);
};

export default SideMenu;
