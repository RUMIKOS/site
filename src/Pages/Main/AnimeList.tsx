import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Title from './Title.tsx'
import Janri from './Janri.tsx'
import Type from './Type.tsx'
type AnimeListProps = {
	title:{
		name:string,
		id:number,
		janri:[],
		type:string
	}
}
export default function AnimeList({ title }:AnimeListProps) {
	let clickedAnime = e => {
		return title
	}
	return (
		<>
			<div
				className='anime__title'
				id={title.name}
				onClick={() => clickedAnime()}
			>
				<Link to={String(title.id)}>
					<Title name={title.name} />
					<Janri janri={title.janri} />
					<Type type={title.type} />
				</Link>
			</div>
		</>
	)
}




