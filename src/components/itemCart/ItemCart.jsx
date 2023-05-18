import { toggleWok, setWok } from '../wok/wokSlice'
import { useDispatch } from 'react-redux'

import './itemCart.css'

const ItemCart = ({price, 
						imageUrl = "./image-1.jpg", 
						name='name',
						weight,
						onAdd}) => {

	const dispatch = useDispatch()

	const onToggleWok = (data) => {
		const id = Math.floor(Math.random() * 100)
		dispatch(toggleWok())
		dispatch(setWok({id, ...data}))
	}

	return (
		<div className="cart__body">
			<div onClick={ () => onToggleWok({name, price, imageUrl, weight}) } className="cart__image">
				<img src={imageUrl} alt="1" />
			</div>
			<div className="cart__content">
				<h2 className="cart__title">{name}</h2>
				<div className="cart__text">
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, sapiente?</p>
				</div>
				<div className="cart__footer">
					<div className="cart__price">{price}</div>
					<button 
						onClick={onAdd}
						className="cart__button"
						>Заказать</button>
				</div>
			</div>
		</div>
	)
}

export default ItemCart