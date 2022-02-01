import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	github_a_tag: {
		textDecoration: 'none !important'
	},
	github_container: {
		background: '#161b22',
		border: '1px solid #30363d',
		padding: 16
	},
	github_header_container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 16
	},
	github_header_title: {
		color: '#58a6ff'
	},
	github_header_bold: {
		fontWeight: '700'
	},
	github_header_buttons: {
		color: '#8b949e !important',
		borderColor: '#363b42 !important'
	},
	github_skeleton_color: {
		background: '#757575 !important'
	},
	github_chips_container: {
		marginBottom: 16
	},
	github_chips: {
		background: '#388bfd26 !important',
		color: '#58a6ff !important',
		marginRight: 8,
		marginBottom: 8
	},
	github_desc: {
		color: '#c9d1d9 !important'
	}
});

export default useStyles;
