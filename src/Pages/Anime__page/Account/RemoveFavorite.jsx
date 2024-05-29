import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeFavorite } from '../../../store/slice/favorite/favoriteSlice'
export default function RemoveFavorite({anime}) {
	const dispatch = useDispatch()
	const removeFav = () => dispatch(removeFavorite())
	return (
		<div className='remove'>
			<button onClick={() => removeFav(anime.id)}>Удалить из избранного</button>
		</div>
	)
}
