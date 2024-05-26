import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFavorite } from '../../store/slice/favorite/favoriteSlice'
export default function FavoriteInPage({anime,title}) {
	const [animeState,setAnimeState] = useState(anime)
	const dispatch = useDispatch()
	const addFav = ()=>dispatch(addFavorite(animeState))
	
  return (
		<div className='favoriteInPage'>
			<button onClick={()=>addFav()}>добавить в избранное</button>
		</div>
	)
}
