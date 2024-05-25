import {  BrowserRouter,Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'
import OnePage from './Pages/Main/OnePage'
import Nav from './Pages/FunctionPages/Nav'
import SecondPage from './Pages/Anime__page/SecondPage'
import LoginPage from './Pages/FunctionPages/LoginPage'
import animesJson from './Components/animes'
import reset from './Css/reset.css'
import main from './Css/main.css'
import First from './Pages/TitlePages/First'
import Acc from './Pages/Anime__page/Account/Acc'
function App() {
	let [isLoggedIn, setIsLoggedIn] = useState(()=>{if(localStorage.getItem('isLoggedIn')==='true'){
		return true
	}return false})
	let [userEmail,setUserEmail] = useState(localStorage.getItem('userEmail'))
	let [userPassword,setUserPassword] = useState('')
	const url = JSON.parse(animesJson)
	console.log(url[0]);
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={
						<Nav
							userEmail={userEmail}
							setIsLoggedIn={setIsLoggedIn}
							isLoggedIn={isLoggedIn}
						/>
					}
				>
					<Route index element={<OnePage />} />
					<Route
						path='acc'
						element={
							<LoginPage
								setIsLoggedIn={setIsLoggedIn}
								setUserEmail={setUserEmail}
								setUserPassword={setUserPassword}
							/>
						}
					/>
					<Route path='account' element={<Acc />} />
					<Route path='random' element={<SecondPage />} />
					<Route path='0' element={<First anime={url[0]} />} />
					<Route path='1' element={<First anime={url[1]} />} />
					<Route path='2' element={<First anime={url[2]} />} />
					<Route path='3' element={<First anime={url[3]} />} />
					<Route path='4' element={<First anime={url[4]} />} />
					<Route path='5' element={<First anime={url[5]} />} />
					<Route path='6' element={<First anime={url[6]} />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
