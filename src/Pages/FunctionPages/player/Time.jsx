import React from 'react'

export default function Time({
	loadedSeconds,
	playedSeconds,
	handleProgress,
}) {
	return (
		<div className='time'>
			<input
				type='range'
				value={playedSeconds}
				min='0'
				max={loadedSeconds}
				step='1.64'
				onChange={(e) => handleProgress(e.target.value)}
			/>
		</div>
	)
}
