import React from 'react'
import Category from './Category'
export default function PageJanri({janri}) {
  return (
    <div className='anime__janri'>
      <ul className='janri__ul'>
        {janri.map(el=><Category category={el}/>)}
      </ul>
    </div>
  )
}
