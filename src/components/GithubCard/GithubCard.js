import React from 'react';
import useStyles from './styles';
import { Box, Stack, Skeleton, Typography, Alert, AlertTitle, Chip, Link } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const GithubCard = ({ name, desc, stars, forks, url, urlName, loading, errorMessage, topics }) => {
	const classes = useStyles();

	const titleSplit = (name) => {
		if (!name) return;
		const values = name.split('/');
		if (values.length < 2) return name;
		const formattedTitle = (
			<>
				<span>{values[0]}</span>/<span className={classes.github_header_bold}>{values[1]}</span>
			</>
		);
		return formattedTitle;
	};

	const DescriptionSkeleton = () => (
		<>
			<Skeleton variant="text" width={250} height={25} className={classes.github_skeleton_color} />
			<Skeleton variant="text" width={250} height={25} className={classes.github_skeleton_color} />
		</>
	);

	const topicChips = () =>
		topics?.map((item, key) => <Chip size="small" label={item} key={key} className={classes.github_chips} />);

	if (errorMessage) {
		return (
			<Alert severity="warning">
				<AlertTitle>Opsss!</AlertTitle>
				Repository "{urlName}" — <strong>{errorMessage}</strong>
			</Alert>
		);
	}

	return (
		<Link href={url} className={classes.github_a_tag}>
			<Box className={classes.github_container}>
				<Box className={classes.github_header_container}>
					<Typography className={classes.github_header_title}>
						{loading ? (
							<Skeleton variant="text" width={80} height={30} className={classes.github_skeleton_color} />
						) : (
							titleSplit(name)
						)}
					</Typography>
					<Stack direction="row" spacing={2}>
						<LoadingButton
							startIcon={<ShareOutlinedIcon />}
							loading={loading}
							loadingPosition="start"
							variant="outlined"
							size="small"
							sx={{ display: { xs: 'none', sm: 'flex' } }}
							className={classes.github_header_buttons}
						>
							{!loading && <Typography>Fork:{forks}</Typography>}
						</LoadingButton>
						<LoadingButton
							startIcon={<StarOutlineIcon />}
							loading={loading}
							loadingPosition="start"
							variant="outlined"
							size="small"
							className={classes.github_header_buttons}
						>
							{!loading && (
								<>
									<Typography sx={{ display: { xs: 'none', sm: 'inline' } }}>Star:</Typography>
									<Typography>{stars}</Typography>
								</>
							)}
						</LoadingButton>
					</Stack>
				</Box>
				<Box className={classes.github_chips_container}>
					{loading ? (
						<Skeleton variant="text" width={250} height={30} className={classes.github_skeleton_color} />
					) : (
						topicChips()
					)}
				</Box>
				<Box>
					<Typography className={classes.github_desc}>{loading ? <DescriptionSkeleton /> : desc}</Typography>
				</Box>
			</Box>
		</Link>
	);
};

export default GithubCard;
