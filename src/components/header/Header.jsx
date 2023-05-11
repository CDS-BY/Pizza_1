import './header.css'
import logo from './logo-carte.svg'

import {toggleModal, removeUser} from '../authModall/modalSlice'
import {useSelector, useDispatch} from 'react-redux'
import { useAuth } from '../../hooks/useAuth'

const Header = () => {

	const dispatch = useDispatch()

	const {isAuth, email} = useAuth()
	
	return (
		<div className="header">
			<div className="header__container">
				<a href="#" className="header__logo">
					<img src={logo} alt="123" />
				</a>
				<div className="header__search search">
					<input type="text" className='search__input' placeholder="Поиск блюд и ресторанов" />
					<button className="search__btn" />
				</div>
				{/* <nav className="header__menu menu">
					<ul className="menu__list">
						<li className="menu__item"><a href="#" className="menu__link">Пункт 1</a></li>
						<li className="menu__item"><a href="#" className="menu__link">Пункт 2</a></li>
						<li className="menu__item"><a href="#" className="menu__link">Пункт 3</a></li>
					</ul>
				</nav> */}
				{/* <button className="header__cart">Корзина</button> */}
				{isAuth ? 
					(<div className="header__auth auth">
					Пользователь: {email}
					<button onClick={() => dispatch(removeUser())} className="auth__link">Выйти</button>
					</div>) : 
					(<div className="header__auth auth">
						<button onClick={() => dispatch(toggleModal())} className="auth__link">Войти</button>
						{/* <a href="№" className="auth__link">Зарегистрироваться</a> */}
					</div>)}
			</div>
		</div>
	)
}

export default Header