import React from 'react'
import VideoNumber from './VideoNumber'
export default function PageSeriesSelect({ video, setSelectedAnime }) {
	console.log(video)
	const choiseAnime = e => {
		setSelectedAnime(e.target.dataset.url)
	}
	return (
		<div className='series__select'>
			{video.map((el, index) => (
				<VideoNumber
					key={el}
					url={el}
					index={index}
					choiseAnime={choiseAnime}
				/>
			))}
		</div>
	)
}
