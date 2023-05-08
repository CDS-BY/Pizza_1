// дданый импорт временный ,пока не уберется fetchItems
import {itemsFetched, itemsFetchingError, itemsFetching} from '../components/items/itemsSlice'

export const fetchItems = (request) => (dispatch) => {
	dispatch(itemsFetching())
	request('https://6449e9f7a8370fb32140d3a9.mockapi.io/users')
		.then(data => dispatch(itemsFetched(data[0].pizza)))
		.catch(() => dispatch(itemsFetchingError()))
}
