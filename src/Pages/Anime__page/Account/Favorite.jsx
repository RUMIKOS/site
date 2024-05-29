import React from 'react'
import { useSelector } from 'react-redux'
import RemoveFavorite from './RemoveFavorite';
export default function Favorite() {
 const title = useSelector(state => state.favorite.favorite)
  return (
		<div className='favorite'>
			<ul className='favorite__ul'>
				{title.map(el => (
					<li className='favorite__li' key={el.anime}>
						{el.anime.name}<RemoveFavorite anime={el.anime}/>
					</li>
				))}
			</ul>
		</div>
	)
}
