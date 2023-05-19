import './authModal.css'

import { toggleModal, setUser } from './modalSlice'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


const AuthModal = () => {
	const [formEmail, setFormEmail] = useState('')
	const [formPassword, setFormPassword] = useState('')
	const [formTel, setFormTel] = useState('')
	const [activeForm, setActiveForm] = useState('1')

	const { modalOpen } = useSelector(state => state.modal)
	const dispatch = useDispatch();

	const handleLogin = (email, password) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				dispatch(setUser({
					email: user.email,
					id: user.uid,
					token: user.accessToken
				}))
				dispatch(toggleModal())
			})
			.catch(() => alert('Invalid user'))
			.finally(() => {
				clearForm()
			})
	}

	const handleRegister = (email, password) => {
		const auth = getAuth()
		createUserWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				dispatch(setUser({
					email: user.email,
					id: user.uid,
					token: user.accessToken
				}))
				dispatch(toggleModal())
			})
			.catch(() => alert('Произошла ошибка, или такой пользователь уже существует - не дописано'))
			.finally(() => {
				clearForm()
			})
	}

	const clearForm = () => {
		setFormEmail('')
		setFormPassword('')
	}

	const form1 = (
		<>
			<form action="auth" className="modal__form">
				<div className="modal__item">
					<label htmlFor="" className="modal__label">Почта</label>
					<input
						value={formEmail}
						onChange={e => setFormEmail(e.target.value)}
						type="email" className="modal__input" />
				</div>
				<div className="modal__item">
					<input
						type="password"
						className="modal__input"
						value={formPassword}
						onChange={e => setFormPassword(e.target.value)} />
				</div>
				<button
					className="modal__btn"
					onClick={(e) => {
						e.preventDefault()
						handleLogin(formEmail, formPassword)
					}}>Войти</button>
			</form>
		</>
	)
	const form2 = (
		<>
			Форма 2
		</>
	)
	const form3 = (
		<>
			<form action="auth" className="modal__form">
				<div className="modal__item">
					<label htmlFor="" className="modal__label">Почта</label>
					<input
						value={formEmail}
						onChange={e => setFormEmail(e.target.value)}
						type="email" className="modal__input" />
				</div>
				<div className="modal__item">
					<label htmlFor="" className="modal__label">Пароль</label>
					<input
						type="password"
						className="modal__input"
						value={formPassword}
						onChange={e => setFormPassword(e.target.value)} />
				</div>
				<div className="modal__item modal__item_tel">
					<label htmlFor="" className="modal__label">Телефон</label>
					<input
						type="tel"
						className="modal__input"
						value={formTel}
						onChange={e => setFormTel(e.target.value)} />
				</div>
				<button
					className="modal__btn"
					onClick={(e) => {
						e.preventDefault()
						handleRegister(formEmail, formPassword)
					}}>Зарегистрироваться</button>
			</form>
		</>
	)

	let showForm;

	switch (activeForm) {
		case '1':
			showForm = form1;
			break;
		case '2':
			showForm = form2;
			break;
		case '3':
			showForm = form3;
			break;
		default:
			console.log('хз');
			break;
	}

	return (
		<div className={modalOpen ? 'modal _active' : "modal"}>
			<div className="modal__wrap">
				<div className="modal__body">
					<div className="modal__title">Авторизация</div>
					{
						showForm
					}
					<ul className="modal__other other-modal">
						<li onClick={() => setActiveForm('1')} className="other-modal__item">Авторизироваться</li>
						<li onClick={() => setActiveForm('2')} className="other-modal__item">Восстановить пароль</li>
						<li onClick={() => setActiveForm('3')} className="other-modal__item">Зарегистрироваться</li>
					</ul>
					<button onClick={() => dispatch(toggleModal())} className="modal__close close"></button>
				</div>
			</div>
		</div>
	)
}

export default AuthModal