import React, { useState } from 'react'
export default function LoginPage({
	setIsLoggedIn,
	setUserEmail,
	setUserPassword
}) {
  let [login,setLogin] = useState('')
  let [password, setPassowrd] = useState('')
  function handleEmailChange(e) {
		setLogin(e.target.value)
	}
  function handelPasswodChange(e) {
		setPassowrd(e.target.value)
	}
  
  const handleLogIn=(e)=>{
	e.preventDefault()
	localStorage.setItem('isLoggedIn',true)
	localStorage.setItem('userEmail',login)
	setUserEmail(login)
	setUserPassword(password)
	setIsLoggedIn(true)
  }
  return (
		<div className='RAP__wrapper'>
			<form action='' onSubmit={handleLogIn}>
				<input
					type='email'
					placeholder='email'
					name='email'
					id='form-email'
					onInput={handleEmailChange}
				/>
				<input
					type='text'
					placeholder='password'
					name='password'
					id='form-password'
					onInput={handelPasswodChange}
				/>
				<input type='submit' />
			</form>
		</div>
	)
}


