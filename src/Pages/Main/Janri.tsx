import React from 'react'

type JanriProps = {
	janri:[]
} 
export default function Janri({ janri }:JanriProps) {
	return (
		<div className='genre'>
			<ul className='genre__ul'>{janri}</ul>
		</div>
	)
}
