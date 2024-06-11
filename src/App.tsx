import {  BrowserRouter,Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'
import OnePage from './Pages/Main/OnePage'
import Nav from './Pages/FunctionPages/Nav'
import SecondPage from './Pages/Anime__page/SecondPage'
import './Css/main.css';
import './Css/reset.css';
import './Css/Nav.css'
import First from './Pages/TitlePages/First'
import { LoginPage } from './Pages/FunctionPages/Account/auth/LoginPage'
import Acc from './Pages/FunctionPages/Account/Acc'
import { useDispatch, useSelector } from 'react-redux'
import { RegisterPage } from './Pages/FunctionPages/Account/auth/RegisterPage'
import { logOutUser } from './store/slice/auth/authSlice'
import { RootState } from './store'
import { useAppDispatch } from './types/hooks'
function App() {
	const dispatch = useAppDispatch()
	const animesState = useSelector<RootState>(state=>state.anime.anime)
	const logOut = localStorage.getItem('isLoggedIn')
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Nav />}>
					<Route index element={<OnePage />} />
					<Route
						path='acc'
						element={
							<div>
								{logOut === 'true' ? (
									<button onClick={() => dispatch(logOutUser())}>LogOut</button>
								) : (
									<>
										<RegisterPage />
										<LoginPage />
									</>
								)}
							</div>
						}
					/>
					<Route path='account' element={<Acc />} />
					<Route path='random' element={<SecondPage />} />
					<Route element={<First anime={animesState[0]} />} />
					<Route path='0' element={<First anime={animesState[0]} />} />
					<Route path='1' element={<First anime={animesState[1]} />} />
					<Route path='2' element={<First anime={animesState[2]} />} />
					<Route path='3' element={<First anime={animesState[3]} />} />
					<Route path='4' element={<First anime={animesState[4]} />} />
					<Route path='5' element={<First anime={animesState[5]} />} />
					<Route path='6' element={<First anime={animesState[6]} />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
