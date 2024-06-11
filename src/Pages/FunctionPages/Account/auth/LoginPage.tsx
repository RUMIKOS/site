import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../Components/firebase'
import { useDispatch } from 'react-redux'
import { checkUser } from '../../../store/slice/auth/authSlice'
export const LoginPage = () => {
  const dispatch = useDispatch()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	function login(e) {
		e.preventDefault() 
			try{
        dispatch(checkUser({email,password}))
				setEmail('')
				setPassword('')
        setError('')
        alert("login")
			}
			catch(e){
        console.log(e)
      }
	}
	return (
		<div className='register'>
			<form>
				<input
					type='email'
					placeholder='Введите почту'
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<input
					type='password'
					placeholder='Пароль'
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				
				<button onClick={login}>Войти</button>
				{error ? <p>{error}</p> : ''}
			</form>
		</div>
	)
}
