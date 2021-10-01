import randomstring from 'randomstring';
import { atom, selector } from 'recoil';
import { FilterProps } from './types';

export const generateDefaultFilter = (): FilterProps => {
	const uid = randomstring.generate(10)
	return {
		uid,
		width: 500,
		height: 500,
		blur: 10,
		borderRadius: 0,
		color: { r: 255, g: 255, b: 255, a: 0.2 },
		zIndex: 1
	}
}

export const filterState = atom<FilterProps[]>({
	key: 'filter-list-state',
	default: []
})

export const filterZeroZIndex = selector<FilterProps[]>({
	key: 'filter-list-zero-z-index-state',
	get: ({ get }) => {
		const filters = get(filterState)
		return filters.map(filter => {
			return {
				uid: filter.uid,
				width: filter.width,
				height: filter.height,
				blur: filter.blur,
				borderRadius: filter.borderRadius,
				color: filter.color,
				zIndex: 0
			}
		})
	}
})
