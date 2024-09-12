import React,{ useState,  useEffect } from 'react'
import AnimeList from './AnimeList'
import Categories from './Categories'
import Search from '../FunctionPages/Search/Search';
import { fetchAnimes } from '../../store/slice/animesSlice';
import { useAppDispatch, useAppSelector } from '../../types/hooks';
export default function OnePage() {
	const dispatch = useAppDispatch()
	const state2 = useAppSelector(state=>state.anime.anime)
	const categoryId = useAppSelector(
		state => state.category.category[0]
	)
	const searchState = useAppSelector(
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
		dispatch(fetchAnimes({ categoryParametr, searchParametr }))
	}, [categoryId, searchState])
	return (
		<div className='main__Wrapper'>
			<div className='anime__list-wrapper'>{animelist}</div>
			<Categories />
			<Search />
		</div>
	)
}
