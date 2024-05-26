import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeFavorite } from '../../../store/slice/favorite/favoriteSlice'
export default function RemoveFavorite({anime}) {
    const [animeState, setAnimeState] = useState(anime)
	const dispatch = useDispatch()
	const removeFav = () => dispatch(removeFavorite())
	return (
		<div className='remove'>
			<button onClick={() => removeFav(anime)}>Удалить из избранного</button>
		</div>
	)
}
