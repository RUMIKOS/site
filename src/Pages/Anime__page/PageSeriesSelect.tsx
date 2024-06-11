import React from 'react'
import VideoNumber from './VideoNumber'
type PageSeriesSelectProps = {
	video: {series:[]},
	setSelectedAnime:(i:string|undefined)=>void
}
export default function PageSeriesSelect({ video, setSelectedAnime }:PageSeriesSelectProps) {
	const choiseAnime = (e:React.ChangeEvent<HTMLDataElement>) => {
		setSelectedAnime(e.target.dataset.url)
	}
	console.log(video.series);
	
	return (
		<div className='series__select'>
			{video.series.map((el:string, index:number) => (
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
