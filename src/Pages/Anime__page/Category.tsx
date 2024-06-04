import React from 'react'
import { addCategory } from '../../store/slice/categories/categorySlice'
import { useDispatch } from 'react-redux'
type CategoryProps = {
	category:[]
}
export default function Category({ category }:CategoryProps) {
	const dispatch = useDispatch()
	const addCat = () => dispatch(addCategory(category))
	return <li onClick={()=>addCat()}>{category}</li>
}
