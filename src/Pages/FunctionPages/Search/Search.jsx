import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSearch } from '../../../store/slice/search/searchSlice'
export default function Search() {
	const searchValue = useSelector(state => state.search.search)
    const dispatch = useDispatch()
    return (
			<div>
				<input
                    type='text'
					value={searchValue}
					onChange={(e) => dispatch(addSearch(e.target.value))}
					placeholder='Поиск по сайту'
				/>
			</div>
		)
}
