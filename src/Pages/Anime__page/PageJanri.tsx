import React from 'react'
import Category from './Category'
type PageJanriProps = {
  janri:string[]
}
export default function PageJanri({janri}:PageJanriProps) {
  return (
    <div className='anime__janri'>
      <ul className='janri__ul'>
        {janri.map(el=><Category category={el}/>)}
      </ul>
    </div>
  )
}
