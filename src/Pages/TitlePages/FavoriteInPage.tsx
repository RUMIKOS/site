import React from 'react'
import { useDispatch } from 'react-redux'
import { addFavorite } from '../../store/slice/favorite/favoriteSlice'
type FavoriteInPageProps = {
	anime: {
		id: number
		name: string
		img: string
		janri: string[]
		series: string[]
		type: string
		voices: string[]
		year: string
	}
}
export default function FavoriteInPage({anime}:FavoriteInPageProps) {
	const dispatch = useDispatch()
	const addOnClick = ()=>{
		const item =anime
		dispatch(addFavorite(item))
	}
	
  return (
		<div className='favoriteInPage'>
			<button onClick={addOnClick}>добавить в избранное</button>
		</div>
	)
}
