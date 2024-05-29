import React from 'react'
import { useDispatch } from 'react-redux'
import { addCategory } from '../../store/slice/categories/categorySlice'
export default function Categories() {
  const catergories = ['creepy', 'hentai', 'humor','dramatic']
  const dispatch = useDispatch()
  const addCat = ()=>dispatch(addCategory())
  return (
    <div className='categories'>
      <ul>
        {catergories.map((el,i)=><li key={i} onClick={()=>addCategory((el))}>{el}</li>)}
      </ul>
    </div>
  )
}
