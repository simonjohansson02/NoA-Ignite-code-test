import * as React from 'react';
import useStyles from './styles';
import { Box, List, ListItemButton, ListItemText } from '@mui/material';

const Filter = ({ urls, counter, handleListItemClick }) => {
	const classes = useStyles();

	const filterList = () =>
		urls.map((item, key) => (
			<ListItemButton key={key} selected={counter === key} onClick={() => handleListItemClick(key)}>
				<ListItemText primary={item} />
			</ListItemButton>
		));

	return (
		<Box className={classes.filter_container}>
			<List component="nav" aria-label="secondary mailbox folder">
				{filterList()}
			</List>
		</Box>
	);
};

export default Filter;
