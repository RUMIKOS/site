import React from 'react'
import { useDispatch } from 'react-redux'
import { addFavorite } from '../../store/slice/favorite/favoriteSlice'
type FavoriteInPageProps ={
	anime:{}
}
export default function FavoriteInPage({anime}:FavoriteInPageProps) {
	const dispatch = useDispatch()
	
  return (
		<div className='favoriteInPage'>
			<button onClick={()=>dispatch(addFavorite(anime))}>добавить в избранное</button>
		</div>
	)
}
