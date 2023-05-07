import './authModal.css'

import { toggleModal } from '../../actions/actions'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const AuthModal = ({ modal, activeModal }) => {
	const [formName, setFormName] = useState('')
	const [formTel, setFormTel] = useState('')
	const [formPassword, setFormPassword] = useState('')
	const [activeForm, setActiveForm] = useState('1')

	const { name, tel, password, modalOpen } = useSelector(state => state.auth)
	const dispatch = useDispatch();

	const form1 = (
		<>
			<form action="auth" className="modal__form">
				<div className="modal__item">
					<label htmlFor="" className="modal__label">Телефон</label>
					<input 
						value={formTel} 
						onChange={e => setFormTel(e.target.value)} 
						type="tel" className="modal__input" />
				</div>
				<div className="modal__item">
					<input 
						type="password" 
						className="modal__input"
						value={formPassword} 
						onChange={e =>	setFormPassword(e.target.value)}  />
				</div>
				<button
					className="modal__btn"
					onClick={(e) => {
						e.preventDefault();
						console.log('Тут должна быть отправка формы');
						dispatch(toggleModal())
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
			Форма 3
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