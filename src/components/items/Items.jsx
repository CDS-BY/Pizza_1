import './items.css'

import { useHttp } from '../../hooks/http.hook'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {itemsFetching, itemsFetched, itemsFetchingError} from '../../actions/actions'
import ItemCart from '../itemCart/ItemCart'

const Items = () => {

	const {items, itemsLoadingStatus} = useSelector(state => state);
	const dispatch = useDispatch();
	const {request} = useHttp();

	useEffect(() => {
		dispatch(itemsFetching())
		request('https://6449e9f7a8370fb32140d3a9.mockapi.io/users')
		.then(data => dispatch(itemsFetched(data[0].pizza)))
		.catch(() => dispatch(itemsFetchingError()))
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