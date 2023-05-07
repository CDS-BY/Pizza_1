// дданый импорт временный ,пока не уберется fetchItems
import {itemsFetched, itemsFetchingError, itemsFetching} from '../components/items/itemsSlice'

export const fetchItems = (request) => (dispatch) => {
	dispatch(itemsFetching())
	request('https://6449e9f7a8370fb32140d3a9.mockapi.io/users')
		.then(data => dispatch(itemsFetched(data[0].pizza)))
		.catch(() => dispatch(itemsFetchingError()))
}

// export const add = (value) => ({
// 	type: 'ADD', payload: value
// })
// export const remove = (value) => ({
// 	type: 'REMOVE',
// 	payload: value
// })

// все, что свзяано с авторизацией

export const authFetching = () => ({
	type: 'AUTH_FETCHING'
})
export const authFetched = () => ({
	type: 'AUTH_FETCHED'
})
export const authFetchingError = () => ({
	type: 'AUTH_FETCHING_ERROR'
})
export const toggleModal = () => ({
	type: 'TOGGLE_MODAL'
})