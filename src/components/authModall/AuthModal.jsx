import './authModal.css'

const AuthModal = ({modal, activeModal}) => {
	return (
		<div className={modal ? 'modal _active' : "modal"}>
			<div className="modal__wrap">
				<div className="modal__body">
					<div className="modal__title">Авторизация</div>
					{/* Тут должен быть компонент формы с различными полями как пропсы, ну либо разные формы от условия */}
					<form action="auth" className="modal__form">
						<div className="modal__item">
							<label htmlFor="" className="modal__label">Телефон</label>
							<input type="tel" className="modal__input" />
						</div>
						<div className="modal__item">
							<input type="password" className="modal__input" />
						</div>
						<button className="modal__btn">Войти</button>
					</form>
					<ul className="modal__other other-modal">
						<li className="other-modal__item">Восстановить пароль</li>
						<li className="other-modal__item">Зарегистрироваться</li>
					</ul>
					<button onClick={activeModal} className="modal__close close"></button>
				</div>
			</div>
		</div>
	)
}

export default AuthModal