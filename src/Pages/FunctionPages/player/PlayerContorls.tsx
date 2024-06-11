import React from 'react'
interface PlayerContorlsProps  {
	handlePlay:(i?:boolean)=>void,
	playing:boolean
}

const PlayerContorls:React.FC<PlayerContorlsProps> = ({ handlePlay, playing})=> {
	return (
		<div className='controls'>
			<div className='play' onClick={() => handlePlay()}>
				{!playing ? 'play' : 'pause'}
			</div>
		</div>
	)
}
export default PlayerContorls