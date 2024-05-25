import React from 'react'

export default function PlayerVolume({ handleVolume, volume }) {
  return (
    <div className='volume'>
        <input type="range" 
            value={volume}
            min='0'
            max='1'
            step='0.005'
            onChange={handleVolume}
        />
    </div>
  )
}
