import './cart.css'

import {removeCartItem, selectAll, calcSum} from './cartSlice'

import {useSelector, useDispatch} from 'react-redux'

import { useState } from 'react'

const Cart = () => {

	const { sum } = useSelector(state => state.cart)
	const items = useSelector(selectAll)

	const [counter, setCounter] = useState(1);

	const dispatch = useDispatch();

	const onInc = (price) => {
		console.log('+1');
		setCounter(() => (counter + 1))
			let newSum = +sum + +price;
			dispatch(calcSum(newSum))
	}
	const onDec = (id, price) => {
		console.log('-1');
		setCounter(() => (counter - 1))
		let newSum = +sum - price;
		dispatch(calcSum(newSum))
		if (counter < 2) {
			dispatch(removeCartItem(id))
		}
	}

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
							<div className="order__count">
								<button
										onClick={() => onInc(elem.price)}
										className="order__btn"
										type="button"
								>+</button>
								<div className="order__value">{counter}</div>
								<button
									onClick={() => onDec(elem.id, elem.price)}
									className="order__btn"
									type="button"
								>-</button>
								{/* <button
									onClick={() => {
										dispatch(removeCartItem(elem.id))
										let newSum = +sum - elem.price;
										dispatch(calcSum(newSum))
									}}
									className="order__btn"
									type="button"
								>-</button> */}
							</div>
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