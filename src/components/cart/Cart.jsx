import './cart.css'

import {removeCartItem} from './cartSlice'

import {useSelector, useDispatch} from 'react-redux'

const Cart = () => {

	const {items, sum} = useSelector(state => state.cart)

	const dispatch = useDispatch();

	return (
		<div className="order">
			<h2 className="order__title">Мой заказ</h2>
			<div className="order__body">
				{items.length ?
					items.map((elem, i) =>
						<div key={i}><span>{elem.name}, стоимость {elem.price}</span>
							<button
								onClick={() => dispatch(removeCartItem(i))}
								type="button"
							>X</button>
						</div>) : <div className="text">Выберите блюда и добавьте их к заказу</div>
				}
			</div>
			<div className="order__sum">
				{sum ? <><span>Итого:</span><span>{sum} руб.</span></> : ''}
			</div>
		</div>
	)
}

// const mapStateToProps = (state) => {
// 	return {
// 		order: state.order,
// 		sum: state.sum
// 	}
// }

export default Cart
// export default connect(mapStateToProps, actions)(Cart)