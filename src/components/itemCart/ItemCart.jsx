// import * as actions from '../../actions/actions'
import { addCartItem } from '../cart/cartSlice'
import { useDispatch } from 'react-redux'


import './itemCart.css'

const ItemCart = ({price, 
						imageUrl = "./image-1.jpg", 
						name='name'}) => {

	const dispatch = useDispatch();

	return (
		<div className="cart__body">
			<a href="#" className="cart__image">
				<img src={imageUrl} alt="1" />
			</a>
			<div className="cart__content">
				<h2 className="cart__title">{name}</h2>
				<div className="cart__text">
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, sapiente?</p>
				</div>
				<div className="cart__footer">
					<div className="cart__price">{price}</div>
					<button 
						onClick={() => dispatch(addCartItem({price, name}))}
						className="cart__button"
						>Заказать</button>
				</div>
			</div>
		</div>
	)
}

export default ItemCart