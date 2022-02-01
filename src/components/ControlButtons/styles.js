import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	ctrl_btns_font_style: {
		fontWeight: 'bold !important',
		fontSize: '18px !important'
	},
	ctrl_btns_switch: {
		position: 'fixed',
		bottom: 0,
		left: 0,
		padding: 40
	},
	btn_default: {
		width: '200px',
		height: '50px',
		borderRadius: '20px !important',
		transition: 'all 0.3s'
	},
	btn_decrement_NoA: {
		background: 'white !important',
		color: 'black !important',
		border: '1px solid black !important',
		marginRight: '20px !important',
		'&:hover': {
			background: 'black !important',
			color: 'white !important'
		}
	},
	btn_decrement_simon: {
		background: '#862323 !important',
		color: 'white !important',
		border: '1px solid #862323 !important',
		marginRight: '20px !important',
		'&:hover': {
			filter: 'brightness(1.4)'
		}
	},
	btn_increment_NoA: {
		background: 'hotpink !important',
		color: 'white !important',
		border: '1px solid hotpink !important',
		marginLeft: '20px !important',
		'&:hover': {
			background: 'rebeccapurple !important',
			borderColor: 'rebeccapurple !important'
		}
	},
	btn_increment_simon: {
		background: '#238636 !important',
		color: 'white !important',
		border: '1px solid #238636 !important',
		marginLeft: '20px !important',
		'&:hover': {
			filter: 'brightness(1.4)'
		}
	},
	btn_disable: {
		filter: 'brightness(0.5)'
	}
});

export default useStyles;
