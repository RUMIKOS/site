import React, { useState } from 'react'
import PageJanri from '../Anime__page/PageJanri';
import PageTitle from '../Anime__page/PageTitle';
import PageType from '../Anime__page/PageType'
import PageVoices from '../Anime__page/PageVoices'
import PageSeries from '../Anime__page/PageSeries'
import Player from '../FunctionPages/player/Player';
import FavoriteInPage from './FavoriteInPage';
import PageSeriesSelect from '../Anime__page/PageSeriesSelect';
import { useAppDispatch, useAppSelector } from '../../types/hooks';
import { addMessage } from '../../store/messageSlice';
type FirstProps = {
	anime: {
		id: number
		name: string
		img: string
		janri: string[]
		series: string[]
		type: string
		voices: string[]
		year: string
	}
}
export default function First({anime}:FirstProps) {
	
  const [selectedAnime,setSelectedAnime] = useState<string[]>(anime.series)
  let [comment,setComment]= useState('')
  const dispatch = useAppDispatch()
  const message = useAppSelector((state)=>state.message.message)
  console.log(message);
  const messageFunc = ()=>{
	dispatch(addMessage({ message: comment, user: localStorage.getItem('user') }))
	setComment('')
  }
  
  return (
		<div className='first__wrapper'>
			<div className='first'>
				<PageTitle name={anime.name} />
				<PageJanri janri={anime.janri} />
				<PageType type={anime.type} />
				<PageVoices voices={anime.voices} />
				<PageSeries series={anime.series} />
				<div className='series__slider'>{}</div>
				<div className='anime__player'>
					<Player video={selectedAnime} />
				</div>
				<PageSeriesSelect video={anime} setSelectedAnime={setSelectedAnime} />
				<FavoriteInPage anime={anime} />
			</div>
			<div className='comments'>
				<div>
					{message.map(el => (
						<div>
							{el.message}
							{el.user}
						</div>
					))}
				</div>
				<input
					type='text'
					placeholder='Введите ваш комментарий'
					value={comment}
					onChange={e => {
						setComment(e.target.value)
					}}
				/>
				{comment.length>=5?<button onClick={messageFunc}>Оставить комментарий</button>:<div>Минимальная длина 5 букв</div>}
			</div>
		</div>
	)
}
