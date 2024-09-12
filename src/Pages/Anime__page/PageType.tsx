import React from 'react'

type PageTypeProps={
  type:string
}
export default function PageType({type}:PageTypeProps) {
  return (
    <div className='anime__type'>{type}</div>
  )
}
