import React, { useState } from 'react'
import PageJanri from '../Anime__page/PageJanri';
import PageTitle from '../Anime__page/PageTitle';
import PageType from '../Anime__page/PageType'
import PageVoices from '../Anime__page/PageVoices'
import PageSeries from '../Anime__page/PageSeries'
import Player from '../FunctionPages/player/Player';
import FavoriteInPage from './FavoriteInPage';
import PageSeriesSelect from '../Anime__page/PageSeriesSelect';
export default function First({anime}) {
  console.log(anime);
  const [selectedAnime,setSelectedAnime] = useState(anime.series[0])
  console.log(selectedAnime);
  return (
		<div className={anime.name}>
			<PageTitle name={anime.name} />
			<PageJanri janri={anime.janri} />
			<PageType type={anime.type} />
			<PageVoices voices={anime.voices} />
			<PageSeries series={anime.series.length}/>
			<div className="series__slider">{}</div>
			<div className='anime__player'>
				<Player video={selectedAnime}/>
			</div>
			<PageSeriesSelect video={anime.series} setSelectedAnime={setSelectedAnime}/>
			<FavoriteInPage anime={anime}/>
		</div>
	)
}
