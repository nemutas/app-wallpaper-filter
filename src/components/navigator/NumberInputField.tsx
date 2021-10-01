import { useEffect, useRef, useState, VFC } from 'react';
import { InputAdornment, TextField } from '@mui/material';

type NumberInputFieldProps = {
	label: string
	unit: string
	currentValue: number
	range: [number, number]
	setFilterProps: (value: number) => void
	disabled?: boolean
}

export const NumberInputField: VFC<NumberInputFieldProps> = props => {
	const { label, unit, currentValue, range, setFilterProps, disabled = false } = props
	const [min, max] = range

	const [value, setValue] = useState(currentValue)
	const inputRef = useRef<any>(null)

	const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		var value = parseInt(e.target.value, 10)
		setValue(value)
		// set filter props
		if (min <= value && value <= max) {
			setFilterProps(value)
		}
	}

	useEffect(() => {
		setValue(currentValue)
	}, [currentValue])

	return (
		<TextField
			inputRef={inputRef}
			label={label}
			variant="standard"
			type="number"
			fullWidth
			value={value}
			disabled={disabled}
			InputLabelProps={{ shrink: true }}
			InputProps={{
				endAdornment: (
					<InputAdornment position="start" sx={{ marginLeft: 1 }}>
						{unit}
					</InputAdornment>
				),
				inputProps: { min, max },
				style: { textAlign: 'right' }
			}}
			helperText={inputRef?.current?.validationMessage}
			onChange={changeHandler}
		/>
	)
}
