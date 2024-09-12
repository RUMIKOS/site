import React from 'react'
import RemoveFavorite from './RemoveFavorite';
import { useAppSelector } from '../../../types/hooks';
const Favorite:React.FC =()=> {
 const title:unknown = useAppSelector(state => state.favorite.favorite)
 if (Array.isArray(title)) {
	return (
		<div className='favorite'>
			<ul className='favorite__ul'>
				{title.map((el: { anime: { name: string; id: number } }) => (
					<li className='favorite__li' key={el.anime.id}>
						{el.anime.name}
						<RemoveFavorite anime={el.anime} />
					</li>
				))}
			</ul>
		</div>
	)
 }
	
}

export default Favorite
