import { useState, useEffect } from 'react';
import { Box, Container, Grid } from '@mui/material';
import Filter from '../Filter/Filter';
import GithubCard from '../GithubCard/GithubCard';
import ControlButtons from '../ControlButtons/ControlButtons';
import MobileNav from '../MobileNav/MobileNav';

function App() {
	const [counter, setCounter] = useState(0);
	const [urlInfo, setUrlInfo] = useState({});
	const [loading, setLoading] = useState(false);

	const myFavRepos = ['simonjohansson02/portfolio-sj', 'simonjohansson02/NoA-Ignite-code-test'];
	const urls = [
		'eslint/eslint',
		'oakwood/front-end-questions',
		'babel/babel',
		'webpack/webpack',
		'storybooks/storybook',
		'facebook/react',
		'reactjs/redux',
		'expressjs/express',
		...myFavRepos
	];

	useEffect(() => {
		(async () => {
			const apiCall = async (url) => {
				const response = await fetch(`https://api.github.com/repos/${url}`);
				const data = await response.json();
				setUrlInfo({
					name: data.full_name,
					desc: data.description,
					stars: data.stargazers_count,
					forks: data.forks_count,
					topics: data.topics,
					url: data.html_url,
					urlName: url,
					errorMessage: data.message
				});
			};
			await apiCall(urls[counter]);
			setLoading(false);
		})();
	}, [counter]);

	const decrement = () => {
		// Doesn't let the counter go below 0
		if (counter === 0) {
			return;
		} else {
			setLoading(true);
			setCounter((prev) => prev - 1);
		}
	};

	const increment = () => {
		if (counter === urls.length - 1) {
			return;
		} else {
			setLoading(true);
			setCounter((prev) => prev + 1);
		}
	};

	const handleListItemClick = (index) => {
		if (index === counter) {
			return;
		} else {
			setLoading(true);
			setCounter(index);
		}
	};

	return (
		<Box>
			<Container maxWidth="lg">
				<Grid container justifyContent="center" spacing={4} pt={6}>
					<Grid item xs={12} md={4} lg={4} sx={{ display: { xs: 'none', md: 'block' } }}>
						<Filter urls={urls} counter={counter} handleListItemClick={handleListItemClick} />
					</Grid>
					<Grid item xs={12} md={8} lg={8}>
						<GithubCard {...urlInfo} loading={loading} />
					</Grid>
					<Grid item xs={12}>
						<ControlButtons
							counter={counter}
							listLength={urls.length}
							decrement={decrement}
							increment={increment}
						/>
					</Grid>
					<Grid item xs={12}>
						<MobileNav counter={counter} decrement={decrement} increment={increment} />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}

export default App;
