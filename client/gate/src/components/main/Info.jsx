import React from "react";
import { Typography, Grid2 } from "@mui/material";

const Info = () => {
	return (
		<Grid2 container item spacing={{ xs: 2 }} textAlign='center' size={{ xs: 8 }} direction='column'>
			<Typography variant='h2' color='initial'>
				Gate: Your Personalized Portal to the Web
			</Typography>
			<Typography variant='h6' color='initial'>
				Welcome to Gate, the platform that lets you create, organize, and access your favorite websites with just a simple code. Whether you're a developer, student, or anyone who navigates between different web resources, Gate helps you create custom lists and quickly move to any site with ease.
			</Typography>
			<Typography variant='h4' fontWeight='bold' color='initial'>
				How It Works
			</Typography>
			<Typography variant='h6' fontWeight='bold' color='initial'>
				Create Custom Lists
			</Typography>
			<Typography variant='body1' color='initial'>
				Organize your favorite websites into categories that suit your needs. Whether it’s a list of development tools, educational resources, or anything else, Gate lets you group them however you like.
			</Typography>
			<Typography variant='h6' fontWeight='bold' color='initial'>
				Add a Code for Each Website
			</Typography>
			<Typography variant='body1' color='initial'>
				Each website in your list gets a unique code of your choosing. Enter the code to quickly access the website without needing to remember the full URL.
			</Typography>
			<Typography variant='h6' fontWeight='bold' color='initial'>
				Access Your Sites Easily
			</Typography>
			<Typography variant='body1' color='initial'>
				Just type your chosen code into Gate’s search, and we’ll take you straight to the site. You can create as many lists as you need, each with its own set of codes.
			</Typography>
		</Grid2>
	);
};

export default Info;
