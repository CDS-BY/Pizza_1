import './items.css'

import { useHttp } from '../../hooks/http.hook'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {fetchItems} from '../../actions/actions'
import ItemCart from '../itemCart/ItemCart'

const Items = () => {

	const {items, itemsLoadingStatus} = useSelector(state => state.items);
	const dispatch = useDispatch();
	const {request} = useHttp();

	useEffect(() => {
		dispatch(fetchItems(request))
		// eslint-disable-next-line
	}, [])

	if(itemsLoadingStatus === 'loading') {
		return <div>Загружается</div>
	} else if (itemsLoadingStatus === 'error') {
		return <div>Ошибка</div>
	}

	const renderItems = (arr) => {
		if(arr.length === 0) {
			<h2>Товаров пока нет</h2>
		}
		
		return arr.map(({id, ...props}) => (
				<ItemCart key={id} {...props} />
		))

	}

	const elements = renderItems(items);
	return (
		<div className="items">
			{elements}
		</div>

	)
}


export default Items