import React from 'react'

export default function FavoriteInPage({anime}) {
  return (
		<div className='favoriteInPage'>
			<button onClick={()=>console.log(anime)}>добавить в избранное</button>
		</div>
	)
}
