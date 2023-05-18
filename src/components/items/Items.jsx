import './items.css'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {fetchItems, selectAll } from './itemsSlice'
import ItemCart from '../itemCart/ItemCart'

import { addCartItem, calcSum } from '../cart/cartSlice'

const Items = () => {

	const {itemsLoadingStatus} = useSelector(state => state.items)
	const items = useSelector(selectAll)
	const cartItems = useSelector(state => state.cart)
	const { sum } = useSelector(state => state.cart)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchItems())
		// eslint-disable-next-line
	}, [])

	if(itemsLoadingStatus === 'loading') {
		return <div>Загружается</div>
	} else if (itemsLoadingStatus === 'error') {
		return <div>Ошибка</div>
	}

	const onAdd = (id, data) => {
		if (Object.keys(cartItems.entities).length === 0) {
			dispatch(addCartItem({id, ...data}))
			dispatch(calcSum(data.price))
		} else {
			if(cartItems.entities.hasOwnProperty(id)) {
				console.log('такое уже есть - увеличить кол-во')
			} else {
				dispatch(addCartItem({id, ...data}))
				let newSum = +sum + +data.price;
				dispatch(calcSum(newSum))
			}
		}
		// dispatch(addCartItem({id, ...data}))
	}

	const renderItems = (arr) => {
		if(arr.length === 0) {
			<h2>Товаров пока нет</h2>
		}
		return arr.map(({id, ...props}) => {
			return (
				<ItemCart key={id} {...props} onAdd={() => onAdd(id, {...props})}/>
		)
		})

	}

	const elements = renderItems(items);
	return (
		<div className="items">
			{elements}
		</div>

	)
}


export default Items