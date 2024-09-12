import React from 'react'
import { addCategory } from '../../store/slice/categories/categorySlice'
import { useAppDispatch } from '../../types/hooks'
type CategoryProps = {
	category:string
}
export default function Category({ category }:CategoryProps) {
	const dispatch = useAppDispatch()
	const addCat = () => dispatch(addCategory(category))
	return <li onClick={()=>addCat()}>{category}</li>
}
