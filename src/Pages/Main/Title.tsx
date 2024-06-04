import React from 'react'
type TitleProps = {
  name:string
}
export default function Title({name}:TitleProps) {
	return <div className='title'>{name}</div>
}
