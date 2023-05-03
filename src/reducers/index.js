const initialState = {
	value: 0,
	modal: false,
	items: [],
	itemsLoadingStatus: 'idle',
	order: [],
	sum: 0
}
// items - карточки товаров
// itemsLoadingStatus: 'idle' - статус загрузки карточек (idle - бездействие)
// order - заказы
// sum - сумма заказа
// modal - показ модалки
// value - ничто, просто с обучения осталось) 

const reducer = (state = initialState, action) => {
	switch (action.type) {	
		case 'ITEMS_FETCHING':
			return {
				...state,
				itemsLoadingStatus: 'loading'
			}
		case 'ITEMS_FETCHED':
			return {
				...state,
				items: action.payload,
				itemsLoadingStatus: 'idle'
			}
		case 'ITEMS_FETCHING_ERROR':
			return {
				...state,
				itemsLoadingStatus: 'error'
			}
		case 'ADD':
			return {
				...state,
				order: [...state.order, action.payload]
			}
		case 'REMOVE':
			return {
				...state,
				order: [...state.order].filter((item, i) => i !== action.payload)
			}
		case 'TOGGLE_MODAL':
			return {
				...state,
				modal: !state.modal
			}
		default: return state;
	}
}

export default reducer