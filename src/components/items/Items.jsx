import ItemCart from '../itemCart/ItemCart'
import './items.css'

import {connect} from 'react-redux'
import * as actions from '../../actions/actions'

const Items = ({ items }) => {
	return (
		<div className="items">
			{items.length ? items.map((item, i) => (
				<ItemCart
					key={i}
					price={item.price}
					avatar={item.imageUrl}
					name={item.name}
				/>)) : console.log('массив карточек пуст')}
		</div>

	)
}

const mapStateToProps = (state) => {
	return {
	}
}

export default connect(mapStateToProps, actions)(Items)