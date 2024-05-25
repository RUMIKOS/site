import { Link, Outlet } from 'react-router-dom'
import {React, useState } from 'react'
import nav from '../../Css/Nav.css'
import Acc from '../Anime__page/Account/Acc'
export default function Nav({ userEmail, isLoggedIn, setIsLoggedIn }) {
	const pagesIndex = [1, 2, 3, 4 , 5 , 6]
	let [randomIndexPage, setRandomIndexPage] = useState(null)
	function randompage(e) {
		setRandomIndexPage(
			(randomIndexPage = String(Math.floor(Math.random() * pagesIndex.length)))
		)
	}
	let handleLogOut =()=>{
		localStorage.setItem('isLoggedIn',false)
		setIsLoggedIn(false)
	}
		
	return (
		<div className='container'>
			<div className='nav__wrapper'>
				<div className='nav__wrapper-elements'>
					<ul className='nav__ul'>
						<li className='nav__li'>
							<Link to='/'>Главная</Link>
						</li>
						{isLoggedIn ? (
							<li className='nav__li' >
								<Link to='account'>{userEmail}</Link>
								<div onClick={handleLogOut}>Выход</div>
							</li>
						) : (
							<li className='nav__li'>
								<Link to='acc'>Логин и авторизация</Link>
							</li>
						)}
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
