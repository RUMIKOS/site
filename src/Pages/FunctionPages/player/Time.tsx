import React from 'react'
interface ITime {
	loadedSeconds:number,
	playedSeconds:number,
	handleProgress:(e?:string)=>void
}
const Time:React.FC<ITime>=({
	loadedSeconds,
	playedSeconds,
	handleProgress,
}) =>{
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
export default Time
