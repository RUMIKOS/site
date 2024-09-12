import React, { useState } from 'react'
import { removeFavorite } from '../../../store/slice/favorite/favoriteSlice'
import { useAppDispatch } from '../../../types/hooks'
interface IAnimeProps {
	anime:{id:number}
}
export default function RemoveFavorite({anime}:IAnimeProps) {
	const dispatch = useAppDispatch()
	return (
		<div className='remove'>
			<button onClick={() => dispatch(removeFavorite({anime}))}>Удалить из избранного</button>
		</div>
	)
}
