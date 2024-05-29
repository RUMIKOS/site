import React, { useState } from 'react'
import { addCategory } from '../../store/slice/categories/categorySlice'
import { useDispatch } from 'react-redux'
export default function Category({ category }) {
	const dispatch = useDispatch()
	const addCat = () => dispatch(addCategory(category))
	return <li onClick={()=>addCat()}>{category}</li>
}
