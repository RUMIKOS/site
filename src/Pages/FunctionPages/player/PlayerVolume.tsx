import React from 'react'
type PlayerVolumeProps = {
	volume: string
	handleVolume: (i: React.ChangeEvent<HTMLInputElement>) => void
}
 const PlayerVolume:React.FC<PlayerVolumeProps>=({ handleVolume, volume })=> {
  return (
    <div className='volume'>
        <input type="range" 
            value={volume}
            min='0'
            max='1'
            step='0.005'
            onChange={e=>handleVolume(e)}
        />
    </div>
  )
}
export default PlayerVolume
