import React, { useState } from 'react'
type LoginPageProps = {
	setIsLoggedIn:boolean,
	setUserEmail:string,
	setUserPassword:string|number
}
export default function LoginPage({
	setIsLoggedIn,
	setUserEmail,
	setUserPassword
}:LoginPageProps) {
  let [login,setLogin] = useState<string|number>('')
  let [password, setPassowrd] = useState<string|number>('')
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


