import React from 'react'
import { addCategory } from '../../store/slice/categories/categorySlice'
import { useAppDispatch } from '../../types/hooks'
export default function Categories() {
  const dispatch = useAppDispatch()
  const catergories: string[] = [
		'creepy',
		'hentai',
		'humor',
		'dramatic',
	]
  return (
    <div className='categories'>
      <ul>
        {catergories.map((el,i)=><li key={i} onClick={()=>dispatch(addCategory((el)))}>{el}</li>)}
      </ul>
    </div>
  )
}
