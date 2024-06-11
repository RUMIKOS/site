import React,{ useState,  useEffect } from 'react'
import AnimeList from './AnimeList'
import { json, useNavigate } from 'react-router-dom';
import Categories from './Categories'
import { useDispatch, useSelector } from 'react-redux';
import Search from '../FunctionPages/Search/Search';
import axios from 'axios';
import QueryString from 'qs';
import { RootState } from '../../store';
import { fetchAnimes } from '../../store/slice/animesSlice';
export default function OnePage() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const state2 = useSelector(state=>state.anime.anime)
	const [animeState,setAnimeState]=useState([])
	const categoryId = useSelector<RootState>(
		state => state.category.category[0]
	)
	const searchState = useSelector<RootState>(
		state=>state.search.search
		
	)
	let animelist = state2.map(
		(el: { id: number; title: {}; name: string; janri: []; type: string }) => (
			<AnimeList key={el.id} title={el} />
		)
	)
	useEffect(() => {
		const categoryParametr = categoryId ? `janri=${categoryId}` : ''
		const searchParametr = searchState ? `&search=${searchState}` : ''
		let lox = dispatch(fetchAnimes({ categoryParametr, searchParametr }))
	}, [categoryId, searchState])
	return (
		<div className='main__Wrapper'>
			<div className='anime__list-wrapper'>{animelist}</div>
			<Categories />
			<Search />
		</div>
	)
}
