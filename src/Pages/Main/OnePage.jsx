import React, { useState } from 'react'
import AnimeList from './AnimeList'
import animesJson from '../../Components/animes'
export default function OnePage(props) {
	const url = JSON.parse(animesJson)
  	let [anime,setAnime] = useState()
	
	console.log(anime);
	return (
		<div className='main__Wrapper'>
			<div className='anime__list-wrapper'>
				{url.map(el => (
					<AnimeList key={el.id} title={el} />
				))}
			</div>
		</div>
	)
}
