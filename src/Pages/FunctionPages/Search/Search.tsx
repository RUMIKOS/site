import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSearch } from '../../../store/slice/search/searchSlice'
import { RootState } from '../../../store'
export default function Search() {
	const dispatch = useDispatch()
	const searchValue = useSelector<RootState>(state=>state.search.search)
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
