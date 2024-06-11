import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeFavorite } from '../../../store/slice/favorite/favoriteSlice'
interface IAnimeProps {
	anime:{id:number}
}
export default function RemoveFavorite({anime}:IAnimeProps) {
	const dispatch = useDispatch()
	return (
		<div className='remove'>
			<button onClick={() => dispatch(removeFavorite({anime}))}>Удалить из избранного</button>
		</div>
	)
}
