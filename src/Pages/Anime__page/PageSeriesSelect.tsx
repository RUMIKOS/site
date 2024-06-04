import React from 'react'
import VideoNumber from './VideoNumber'
type PageSeriesSelectProps = {
	video: [],
	setSelectedAnime:string
}
export default function PageSeriesSelect({ video, setSelectedAnime }:PageSeriesSelectProps) {
	const choiseAnime = (e:React.SyntheticEvent<HTMLButtonElement>) => {
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
