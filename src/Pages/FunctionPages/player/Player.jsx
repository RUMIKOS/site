import React, { useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import PlayerContorls from './PlayerContorls'
import PlayerVolume from './PlayerVolume'
import Time from './Time'
export default function Player({video}) {
  const [playingState,setPlaying] = useState(false)
  const [volumeState,setVolumeState] = useState(0)
  const [timeState,setTimeState] =useState({
    loadedSeconds:1,
    playedSeconds:0,
    refPlayer:0
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
  const handleVolume =(e)=>{
    setVolumeState({...volumeState,volume:e.target.value})
  }
  const handleTime =(e)=>{
    setTimeState({...timeState,...e})
  }
  const refPlayer=useRef()
  const handleProgress=(e)=>{
    refPlayer.current.seekTo(Number(e))
  }
  console.log(video);
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
