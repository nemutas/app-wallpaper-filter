import React, { useEffect, useRef, useState, VFC } from 'react';
import { RgbaColor, RgbaColorPicker } from 'react-colorful';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { css, cx } from '@emotion/css';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button, IconButton } from '@mui/material';
import { useDeleteFilter, useFilterProps, useGetActiveFilter } from '../../hooks';
import { filterState, filterZeroZIndex, generateDefaultFilter } from '../../store';
import { CustomSlider } from './CustomSlider';
import { NumberInputField } from './NumberInputField';

export const NavigationController: VFC = () => {
	// public state
	const setFilter = useSetRecoilState(filterState)
	const zeroZIndexFilters = useRecoilValue(filterZeroZIndex)
	const { activeFilter } = useGetActiveFilter()
	const { setFilterProps } = useFilterProps(activeFilter ? activeFilter.uid : '')
	const { deleteFitler } = useDeleteFilter(activeFilter ? activeFilter.uid : '')
	// private state
	const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight])
	const [active, setActive] = useState(true)
	const updateRef = useRef(true)

	useEffect(() => {
		const resizeHandler = () => setWindowSize([window.innerWidth, window.innerHeight])
		window.addEventListener('resize', resizeHandler)
		return () => window.removeEventListener('resize', resizeHandler)
	}, [])

	useEffect(() => {
		const intervalId = setInterval(() => {
			updateRef.current = true
		}, 100)
		return () => clearInterval(intervalId)
	}, [])

	const closeClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation()
		setActive(false)
	}

	const addClickHandler = () => {
		const newFilter = generateDefaultFilter()
		setFilter([...zeroZIndexFilters, newFilter])
	}

	const deleteClickHandler = () => {
		deleteFitler()
	}

	const widthChangeHandler = (value: number) => {
		activeFilter && setFilterProps({ ...activeFilter, width: value })
	}

	const heightChangeHandler = (value: number) => {
		activeFilter && setFilterProps({ ...activeFilter, height: value })
	}

	const borderRadiusChangeHandler = (value: number) => {
		activeFilter && setFilterProps({ ...activeFilter, borderRadius: value })
	}

	const blurChangeHandler = (value: number) => {
		activeFilter && setFilterProps({ ...activeFilter, blur: value })
	}

	const colorChangeHandler = (e: RgbaColor) => {
		if (activeFilter && updateRef.current) {
			// 更新が早すぎるとバグるため、updateRefで更新間隔をあける
			setFilterProps({ ...activeFilter, color: e })
			updateRef.current = false
		}
	}

	return (
		<div
			className={cx(styles.screen, { [styles.activeScreen]: active })}
			onClick={() => setActive(true)}>
			<div className={styles.container}>
				{/* close button */}
				<div className={cx({ [styles.closeButton]: active })} onClick={closeClickHandler}>
					<div className={cx({ [styles.close]: active })} />
				</div>
				{/* controller */}
				<div className={cx(styles.controller, { [styles.activeController]: active })}>
					<div className={styles.btnContainer}>
						<Button variant="outlined" onClick={addClickHandler}>
							Add
						</Button>
						<Button
							variant="outlined"
							color="secondary"
							onClick={deleteClickHandler}
							disabled={!activeFilter}>
							Delete
						</Button>
					</div>

					<div className={styles.inputContainer}>
						<NumberInputField
							label="Width"
							unit="px"
							currentValue={activeFilter ? activeFilter.width : 500}
							range={[10, windowSize[0]]}
							setFilterProps={widthChangeHandler}
							disabled={!activeFilter}
						/>
						<Button
							variant="outlined"
							disabled={!activeFilter}
							sx={{ height: 30, mt: 2 }}
							onClick={() => widthChangeHandler(window.innerWidth)}>
							Fill
						</Button>
					</div>

					<div className={styles.inputContainer}>
						<NumberInputField
							label="Height"
							unit="px"
							currentValue={activeFilter ? activeFilter.height : 500}
							range={[10, windowSize[1]]}
							setFilterProps={heightChangeHandler}
							disabled={!activeFilter}
						/>
						<Button
							variant="outlined"
							disabled={!activeFilter}
							sx={{ height: 30, mt: 2 }}
							onClick={() => heightChangeHandler(window.innerHeight)}>
							Fill
						</Button>
					</div>

					<div className={styles.inputContainer}>
						<CustomSlider
							label="Corner Roundness"
							unit="%"
							currentValue={activeFilter ? activeFilter.borderRadius : 0}
							range={[0, 50]}
							setFilterProps={borderRadiusChangeHandler}
							disabled={!activeFilter}
						/>
					</div>

					<div className={styles.inputContainer}>
						<CustomSlider
							label="Blur"
							unit="px"
							currentValue={activeFilter ? activeFilter.blur : 10}
							range={[0, 100]}
							setFilterProps={blurChangeHandler}
							disabled={!activeFilter}
						/>
					</div>

					{activeFilter ? (
						<RgbaColorPicker color={activeFilter.color} onChange={colorChangeHandler} />
					) : (
						<RgbaColorPicker />
					)}

					{/* link button */}
					<div className={styles.linkButtonContainer}>
						<IconButton aria-label="git hub" color="default" size="large">
							<GitHubIcon sx={{ width: 40, height: 40 }} />
						</IconButton>
					</div>
				</div>
			</div>
		</div>
	)
}

// ==============================================
// styles

const styles = {
	screen: css`
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 30px;
		opacity: 0;
		transition: 0.5s;
		z-index: 10;

		&:hover {
			opacity: 1;
			background-color: rgba(0, 0, 0, 0.6);
			cursor: pointer;
		}
	`,
	activeScreen: css`
		width: 400px;
		opacity: 1;
		background-color: rgba(0, 0, 0, 0.6);

		&:hover {
			cursor: auto;
		}
	`,
	container: css`
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
	`,
	closeButton: css`
		position: absolute;
		top: 10px;
		right: 10px;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		padding: 8px;
		cursor: pointer;
		transition: background-color 0.3s;

		&:hover {
			background-color: rgba(255, 255, 255, 0.2);
		}
	`,
	close: css`
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		&::before {
			content: '';
			position: absolute;
			width: 100%;
			height: 2px;
			background-color: white;
			transform: rotate(45deg);
		}
		&::after {
			content: '';
			position: absolute;
			width: 100%;
			height: 2px;
			background-color: white;
			transform: rotate(-45deg);
		}
	`,
	controller: css`
		position: absolute;
		bottom: 0;
		width: 100%;
		height: calc(100% - 70px);
		display: flex;
		flex-direction: column;
		align-items: center;
		grid-gap: 30px;
		padding: 0 20px 20px 20px;
		opacity: 0;
		transform: translateY(100%);
		transition: transform 1s, opacity 0.5s;
	`,
	activeController: css`
		transform: translateY(0);
		opacity: 1;
	`,
	btnContainer: css`
		position: relative;
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 10px;
	`,
	inputContainer: css`
		position: relative;
		width: 100%;
		height: 80px;
		display: flex;
		grid-gap: 10px;
	`,
	linkButtonContainer: css`
		position: absolute;
		bottom: 0;
		width: 100%;
		padding: 10px;
		display: flex;
	`
}
