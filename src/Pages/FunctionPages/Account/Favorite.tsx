import React from 'react'
import { useSelector } from 'react-redux'
import RemoveFavorite from './RemoveFavorite';
type title ={
	title:unknown;
}
const Favorite:React.FC =()=> {
 const title:unknown = useSelector(state => state.favorite.favorite)
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
