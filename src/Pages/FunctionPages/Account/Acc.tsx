import React from 'react'
import Favorite from './Favorite'
import { useDispatch, useSelector } from 'react-redux'
import { logOutUser } from '../../../store/slice/auth/authSlice'
export default function Acc() {
	const dispatch = useDispatch()
	const user:string|null = localStorage.getItem('user')
	return (
		<div className='account'>
			<Favorite />
			{user}
			<button onClick={()=>dispatch(logOutUser())}>Выйти из профиля</button>
		</div>
	)
}
