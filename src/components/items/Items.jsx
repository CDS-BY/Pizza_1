import './items.css'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {fetchItems, selectAll } from './itemsSlice'
import ItemCart from '../itemCart/ItemCart'

import { addCartItem } from '../cart/cartSlice'

const Items = () => {

	const {itemsLoadingStatus} = useSelector(state => state.items)
	const items = useSelector(selectAll)
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
		dispatch(addCartItem({id, ...data}))
	}

	const renderItems = (arr) => {
		if(arr.length === 0) {
			<h2>Товаров пока нет</h2>
		}

		// return arr.map(({id, ...props}) => (
		// 		<ItemCart key={id} {...props} />
		// ))
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