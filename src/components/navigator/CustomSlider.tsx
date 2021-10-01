import React, { useEffect, useState, VFC } from 'react';
import { css } from '@emotion/css';
import { Slider, Typography } from '@mui/material';

type CustomSliderProps = {
	label: string
	unit: string
	currentValue: number
	range: [number, number]
	setFilterProps: (value: number) => void
	disabled?: boolean
}

export const CustomSlider: VFC<CustomSliderProps> = props => {
	const { label, unit, currentValue, range, setFilterProps, disabled = false } = props
	const [min, max] = range

	const [value, setValue] = useState(currentValue)

	useEffect(() => {
		setValue(currentValue)
	}, [currentValue])

	const handleChange = (event: Event, newValue: number | number[]) => {
		setValue(newValue as number)
		setFilterProps(newValue as number)
	}

	return (
		<div className={styles.container}>
			<Typography variant="caption" gutterBottom sx={{ color: disabled ? '#7A7A7A' : '#B7B7B7' }}>
				{label}
			</Typography>
			<div className={styles.sliderContainer}>
				<Slider
					aria-label={label}
					size="small"
					value={value}
					valueLabelDisplay="auto"
					min={min}
					max={max}
					marks={[
						{ value: min, label: `${min}${unit}` },
						{ value: max, label: `${max}${unit}` }
					]}
					disabled={disabled}
					onChange={handleChange}
				/>
			</div>
		</div>
	)
}

const styles = {
	container: css`
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
	`,
	sliderContainer: css`
		width: 100%;
		padding-left: 10px;
		padding-right: 10px;
	`,
	text: css`
		color: #b7b7b7;
	`
}
