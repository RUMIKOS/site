import { useState, React, useEffect } from 'react'
import AnimeList from './AnimeList'
import animesJson from '../../Components/animes'
import { json } from 'react-router-dom';
import Categories from './Categories'
import { useSelector } from 'react-redux';
export default function OnePage(props) {
	const categoryId = useSelector(state=>state.category.category[0])
	let [anime,setAnime] = useState([])
	useEffect(()=>{fetch(`https://665420081c6af63f46767a91.mockapi.io/1/title?${categoryId?`janri=${categoryId}`:''}`)
		.then(res => {
			return res.json()
		})
		.then(json => {
			setAnime(json)
		})},[categoryId])
	console.log(categoryId);
	
	return (
		<div className='main__Wrapper'>
			<div className='anime__list-wrapper'>
				{anime.map(el => (
					<AnimeList key={el.id} title={el} />
				))}
			</div>
			<Categories />
		</div>
	)
}
