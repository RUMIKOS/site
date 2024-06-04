import React from 'react'

type PageVoicesProps={
  voices:[]
}
export default function PageVoices({voices}:PageVoicesProps) {
  return (
    <div className='anime__voices'>{voices}</div>
  )
}
