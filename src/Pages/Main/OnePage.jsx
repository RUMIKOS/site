import { useState, React, useEffect } from 'react'
import AnimeList from './AnimeList'
import { json, useNavigate } from 'react-router-dom';
import Categories from './Categories'
import { useDispatch, useSelector } from 'react-redux';
import Search from '../FunctionPages/Search/Search';
import axios from 'axios';
import QueryString from 'qs';
import { setAnimes , fetchAnimes} from '../../store/slice/animesSlice';
export default function OnePage(props) {
	const anime = useSelector((state)=>state.anime.anime)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const categoryId = useSelector(state=>state.category.category[0])
	const searchValue = useSelector(state => state.search.search)
	let animelist = anime.map(el => (<AnimeList key={el.id} title={el} />))
	useEffect(() => {
		const categoryParametr = categoryId ? `janri=${categoryId}` : ''
		const searchParametr = searchValue ? `&search=${searchValue}` : ''
	axios
			.get(
				`https://665420081c6af63f46767a91.mockapi.io/1/title?${categoryParametr}${searchParametr}`
			)
			.then(res => {
				dispatch(setAnimes(res.data))
			}).catch(err=>
				console.log(err.message))
			}
	, [categoryId, searchValue])
	useEffect(()=>{
		const queryString = QueryString.stringify({
			categoryId,
			searchValue
		})
	navigate(`?${queryString}`)
	},[categoryId,searchValue])
	useEffect(()=>{
		if(window.location.search){
			const params = QueryString.parse(window.location.search.substring(1))
			console.log(params);
		}
		
	},[])
	return (
		<div className='main__Wrapper'>
			<div className='anime__list-wrapper'>
				{animelist}
			</div>
			<Categories />
			<Search />
		</div>
	)
}
