import React, { useState } from 'react';
import useStyles from './styles';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Box, Stack, ButtonBase, Typography, FormControlLabel, Switch } from '@mui/material';

const ControlButtons = ({ counter, listLength, decrement, increment }) => {
	const classes = useStyles();
	const [isStyled, setIsStyled] = useState(false);

	const incrementButtonClass = `${isStyled ? classes.btn_increment_simon : classes.btn_increment_NoA} ${
		classes.btn_default
	} ${classes.ctrl_btns_font_style} ${counter === listLength - 1 && classes.btn_disable}`;

	const decrementButtonClass = `${isStyled ? classes.btn_decrement_simon : classes.btn_decrement_NoA} ${
		classes.btn_default
	} ${classes.ctrl_btns_font_style} ${counter === 0 && classes.btn_disable}`;

	return (
		<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
			<FormControlLabel
				control={<Switch onChange={(event) => setIsStyled(event.target.checked)} />}
				label="My button styles"
				className={classes.ctrl_btns_switch}
			/>

			<Stack direction="row" alignItems="center" justifyContent="center">
				<ButtonBase className={decrementButtonClass} onClick={decrement} disabled={counter === 0}>
					<RemoveIcon />
					Decrement
				</ButtonBase>
				<Typography className={classes.ctrl_btns_font_style}>Counter: {counter}</Typography>
				<ButtonBase className={incrementButtonClass} onClick={increment} disabled={counter === listLength - 1}>
					Increment
					<AddIcon />
				</ButtonBase>
			</Stack>
		</Box>
	);
};

export default ControlButtons;
