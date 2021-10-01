import { motion } from 'framer-motion';
import React, { useRef, VFC } from 'react';
import { css } from '@emotion/css';
import { createTheme, ThemeProvider } from '@mui/material';
import { Background } from './Background';
import { FiltersPanel } from './FiltersPanel';
import { NavigationController } from './navigator/NavigationController';

export const App: VFC = () => {
	const screenRef = useRef<HTMLDivElement>(null)

	return (
		<ThemeProvider theme={darkTheme}>
			<motion.div ref={screenRef} className={styles.container}>
				<Background />
				<FiltersPanel screenRef={screenRef} />
				<NavigationController />
			</motion.div>
		</ThemeProvider>
	)
}

const darkTheme = createTheme({
	palette: {
		mode: 'dark'
	}
})

const styles = {
	container: css`
		position: relative;
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		background: linear-gradient(45deg, #354458 50%, #29aba4 50%);

		&::before {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			clip-path: polygon(0 0, 100% 0, 100% 30%, 0 70%);
			background: linear-gradient(-80deg, #e9e0d6 60%, #3a9ad9 60%);
		}
	`,
	text: css`
		color: white;
		font-size: 5rem;
	`
}
