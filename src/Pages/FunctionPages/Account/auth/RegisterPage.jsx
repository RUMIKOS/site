import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../Components/firebase'
import { useDispatch } from 'react-redux'
import { addUser } from '../../../store/slice/auth/authSlice'
export const RegisterPage = () => {
  const dispatch = useDispatch()
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const [error,setError] = useState('')
  function register(e){
    e.preventDefault()
    if (password !==passwordRepeat){
      setError("Пароли не совпадают")
      return
    }
    try{ dispatch(addUser({email,password}))
    setEmail('')
    setPassword('')
    setPasswordRepeat('')}
    catch(e){e.console.log(e);}
   
  }
  return (
		<div className='register'>
			<form onSubmit={register}>
				<input 
        type='email' 
        placeholder='Введите почту'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/>
				<input 
        type='password' 
        placeholder='Пароль' 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}/>
				<input 
        type='password' 
        placeholder='Повторите пароль' 
        value={passwordRepeat}
        onChange={(e)=>setPasswordRepeat(e.target.value)}/>
        <button>Зарегистрироваться</button>
        {error?<p>{error}</p>:''}
			</form>
		</div>
	)
}
