const initialState = {
	value: 0,
	items: [],
	itemsLoadingStatus: 'idle',
}
// items - карточки товаров
// itemsLoadingStatus: 'idle' - статус загрузки карточек (idle - бездействие)
// value - ничто, просто с обучения осталось) 

const items = (state = initialState, action) => {
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
		default: return state;
	}
}

export default items