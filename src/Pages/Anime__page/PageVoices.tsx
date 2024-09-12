import React from 'react'

type PageVoicesProps={
  voices:string[]
}
export default function PageVoices({voices}:PageVoicesProps) {
  return (
    <div className='anime__voices'>{voices}</div>
  )
}
