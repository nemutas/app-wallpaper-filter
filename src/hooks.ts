import { useRecoilState, useRecoilValue } from 'recoil';
import { filterState } from './store';
import { FilterProps } from './types';

/**
 * uid で指定した filter へ参照するカスタムフック
 * @param uid filter uid
 * @returns properties setter
 */
export const useFilterProps = (uid: string) => {
	const [filters, setFilters] = useRecoilState(filterState)

	const setFilterProps = (newProps: FilterProps) => {
		let anotherFilters = filters.filter(filter => filter.uid !== uid)
		if (newProps.zIndex === 1) {
			// 更新するフィルターのz-indexが1だった場合、他のフィルターのz-indexは0にする
			anotherFilters = anotherFilters.map(anotherFilterProps => {
				return {
					...anotherFilterProps,
					zIndex: 0
				}
			})
		}
		setFilters([...anotherFilters, newProps])
	}

	const filterProps = filters.find(filter => filter.uid === uid)

	return { filterProps, setFilterProps }
}

/**
 * active状態のfilterを取得するカスタムフック
 * @returns active filter
 */
export const useGetActiveFilter = () => {
	const filters = useRecoilValue(filterState)
	return { activeFilter: filters.find(filter => filter.zIndex === 1) }
}

/**
 * filterを削除する関数を返すカスタムフック
 * @param uid 削除対象のfilter uid
 * @returns delete function
 */
export const useDeleteFilter = (uid: string) => {
	const [filters, setFilters] = useRecoilState(filterState)

	const deleteFitler = () => {
		// 削除対象以外のfilterがあれば、最後に追加したfilterをactive状態にする
		let anotherFilters = filters.filter(filter => filter.uid !== uid)
		let activeFilter: FilterProps | undefined
		if (anotherFilters.length > 0) {
			activeFilter = anotherFilters[anotherFilters.length - 1]
			anotherFilters = anotherFilters.filter(filter => filter.uid !== activeFilter!.uid)
		}
		if (activeFilter) {
			setFilters([...anotherFilters, { ...activeFilter, zIndex: 1 }])
		} else {
			// 残りのfilterがひとつもない場合
			setFilters([])
		}
	}
	return { deleteFitler }
}
