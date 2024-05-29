import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Title from './Title'
import Janri from './Janri'
import Type from './Type'
import Categories from './Categories'
export default function AnimeList(props) {
  	const anime = props.title
  	// let [selectedAnime,setSelectedAnime] = useState(null)
	let selectedAnime=null;
  	let clickedAnime = e => {
		selectedAnime=anime
	}
  	return (
			<>
				<div
					className='anime__title'
					id={anime.name}
					onClick={() => clickedAnime()}
				>
					<Link to={String(anime.id)}>
						<Title name={anime.name} />
						<Janri janri={anime.janri} />
						<Type type={anime.type} />
					</Link>
				</div>
			</>
		)
	
}




