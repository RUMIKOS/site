import { Link, Outlet } from 'react-router-dom'
import React,{ useState } from 'react'
export default function Nav() {
	const logIn = localStorage.getItem('isLoggedIn')
	const pagesIndex = [1, 2, 3, 4 , 5 , 6]
	let [randomIndexPage, setRandomIndexPage] = useState('')
	function randompage() {
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
