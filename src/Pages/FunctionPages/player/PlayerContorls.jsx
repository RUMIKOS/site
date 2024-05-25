import React from 'react'

export default function PlayerContorls({ handlePlay, playing}) {
	return (
		<div className='controls'>
			<div className='play' onClick={() => handlePlay()}>
				{!playing ? 'play' : 'pause'}
			</div>
		</div>
	)
}
