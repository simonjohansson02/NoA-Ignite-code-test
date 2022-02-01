import React, { useState } from 'react';
import useStyles from './styles';
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const MobileNav = ({ counter, decrement, increment }) => {
	const classes = useStyles();
	const [value, setValue] = useState(0);

	return (
		<Box sx={{ display: { xs: 'block', sm: 'none' } }} className={classes.bot_nav_box}>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
				className={classes.bot_nav_container}
			>
				<BottomNavigationAction
					onClick={decrement}
					label="Decrement"
					icon={<RemoveIcon />}
					className={classes.bot_nav_action}
				/>
				<BottomNavigationAction label={counter} className={classes.bot_nav_action} />
				<BottomNavigationAction
					onClick={increment}
					label="Increment"
					icon={<AddIcon />}
					className={classes.bot_nav_action}
				/>
			</BottomNavigation>
		</Box>
	);
};

export default MobileNav;
