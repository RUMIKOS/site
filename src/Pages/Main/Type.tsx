import React from 'react'

type CategoriesProps = {
	type:string
}
export default function Type({ type }:CategoriesProps) {
	return <div className='type'>{type}</div>
}
