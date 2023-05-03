import './cart.css'

// import { connect } from 'react-redux'
import {remove} from '../../actions/actions'

import {useSelector, useDispatch} from 'react-redux'

const Cart = () => {

	const {order} = useSelector(state => state)
	// тут sum зассчитывается всрато, а не так как надо. Пока функционал не допилен, оставлю так
	let {sum} = useSelector(state => state)
	order.forEach((elem) => sum += +elem.price)

	const dispatch = useDispatch();
	console.log();

	return (
		<div className="order">
			<h2 className="order__title">Мой заказ</h2>
			<div className="order__body">
				{order.length ?
					order.map((elem, i) =>
						<div key={i}><span>{elem.name}, стоимость {elem.price}</span>
							<button
								onClick={() => dispatch(remove(i))}
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