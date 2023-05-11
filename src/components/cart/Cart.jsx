import './cart.css'

import {removeCartItem, selectAll} from './cartSlice'

import {useSelector, useDispatch} from 'react-redux'

const Cart = () => {

	const { sum } = useSelector(state => state.cart)
	const items = useSelector(selectAll)

	const dispatch = useDispatch();

	return (
		<div className="order">
			<h2 className="order__title">Мой заказ</h2>
			<div className="order__body">
				{items.length ?
					items.map((elem) =>
						<div key={elem.id}  className="order__item">
							<div className="order__descr">
								<div className="order__name">{elem.category} {elem.name}</div>
								<div className="order__weight">{elem.weight} г.</div>
							</div>
							<button
								onClick={() => dispatch(removeCartItem(elem.id))}
								className="order__btn"
								type="button"
							>X</button>
							<span>{elem.price} p.</span>
						</div>) : <div className="text">Выберите блюда и добавьте их к заказу</div>
				}
			</div>
			<div className="order__footer">
				{sum ? <>
							<div className="order__total">Итого:<span>{sum} руб.</span></div>
							<button className="order__button">Оформить заказ</button>
						</> : ''}
			</div>
		</div>
	)
}

export default Cart