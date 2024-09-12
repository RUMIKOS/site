import React from 'react'
import { addSearch } from '../../../store/slice/search/searchSlice'
import { useAppDispatch, useAppSelector } from '../../../types/hooks'
export default function Search() {
	const dispatch = useAppDispatch()
	const searchValue = useAppSelector(state=>state.search.search)
	if (typeof searchValue === 'string') {
		return (
			<div>
				<input
					type='text'
					value={searchValue}
					onChange={e => dispatch(addSearch(e.target.value))}
					placeholder='Поиск по сайту'
				/>
			</div>
		)
	}
}
