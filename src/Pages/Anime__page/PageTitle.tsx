import React from 'react'
type PageTitleProps ={
  name:string
}
export default function PageTitle({name}:PageTitleProps) {
  return (
    <div className='anime__name'>{name}</div>
  )
}
