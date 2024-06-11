import { Link, Outlet } from 'react-router-dom'
import {React, useEffect, useState } from 'react'
import nav from '../../Css/Nav.css'
import Acc from './Account/Acc'
import { useSelector } from 'react-redux'
import Favorite from './Account/Favorite'
export default function Nav() {
	const logIn = localStorage.getItem('isLoggedIn')
	const user = localStorage.getItem('user')
	const pagesIndex = [1, 2, 3, 4 , 5 , 6]
	let [randomIndexPage, setRandomIndexPage] = useState(null)
	function randompage(e) {
		setRandomIndexPage(
			(randomIndexPage = String(Math.floor(Math.random() * pagesIndex.length)))
		)
	}		
	return (
		<div className='container'>
			<div className='nav__wrapper'>
				<div className='nav__wrapper-elements'>
					<ul className='nav__ul'>
						<li className='nav__li'>
							<Link to='/'>Главная</Link>
						</li>

						<li className='nav__li'>
							{logIn==='false'?<Link to='acc'>Логин или Регистарция</Link>:<Link to='account'>Ваш профиль</Link>}
							{/* <Link to='acc'>
								{logIn==="false"?`Регистарция или авторизация`:user}
							</Link> */}
						</li>
					</ul>
					<div className='random__anime' onClick={randompage}>
						<Link to={randomIndexPage} id='random'>
							Случайное аниме
						</Link>
					</div>
				</div>
			</div>
			<Outlet />
		</div>
	)
}
