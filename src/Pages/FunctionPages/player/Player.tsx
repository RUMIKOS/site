import React, { MouseEventHandler, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import PlayerContorls from './PlayerContorls'
import PlayerVolume from './PlayerVolume'
import Time from './Time'
interface PlayerProps  {
  video:number
}
export default function Player({video}:PlayerProps) {
  const [playingState,setPlaying] = useState<{playing:boolean}>({playing:false})
  const [volumeState, setVolumeState] = useState<{volume:string}>({volume:'0'})
  const [timeState, setTimeState] = useState<{
		loadedSeconds: number
		playedSeconds: number
		refPlayer: number
	}>({
		loadedSeconds: 1,
		playedSeconds: 0,
		refPlayer: 0,
	})
  const {
    playing
  }=playingState
  const {
    volume
  }=volumeState
  const { 
    playedSeconds, 
    loadedSeconds,
  } = timeState
  const handlePlay = ()=>{
    setPlaying({ ...playingState, playing: !playingState.playing })
  }
  const handleVolume =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setVolumeState({...volumeState,volume:e.target.value})
  }
  const handleTime = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTimeState({ ...timeState, ...e })
	}
  const refPlayer=useRef()
  const handleProgress=(e:React.ChangeEvent<HTMLInputElement>)=>{
    refPlayer.current.seekTo(Number(e))
  }
  return (
		<div className='player__anime'>
			<ReactPlayer
				url={video}
				playing={playing}
				controls={false}
				ref={refPlayer}
				volume={volume}
				onProgress={handleTime}
			/>
			<PlayerContorls handlePlay={handlePlay} playing={playing} />
			<PlayerVolume handleVolume={handleVolume} volume={volume} />
			<Time
				handleTime={handleTime}
				loadedSeconds={loadedSeconds}
				playedSeconds={playedSeconds}
				handleProgress={handleProgress}
			/>
		</div>
	)
}
