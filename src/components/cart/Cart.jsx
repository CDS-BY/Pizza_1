import './cart.css'

import { connect } from 'react-redux'

const Cart = ({sum , order}) => {
	order.forEach((elem) => sum += +elem.price)
	return (
		<div className="order">
			<h2 className="order__title">Мой заказ</h2>
			<div className="order__body">
				{order.length ? order.map((elem, i) => <div key={i}><span>{elem.name}, стоимость {elem.price}</span> <button type="button">X</button></div> ) : <div className="text">Выберите блюда и добавьте их к заказу</div>}
			</div>
			<div className="order__sum">
				{sum ? <><span>Итого:</span><span>{sum} руб.</span></> : ''} 
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		order: state.order,
		sum: state.sum
	}
}

export default connect(mapStateToProps)(Cart)