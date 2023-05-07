const initialState = {
	order: [],
	sum: 0
}

// order - заказы
// sum - сумма заказа

const order = (state = initialState, action) => {
	switch (action.type) {	
		case 'ADD':
			return {
				...state,
				order: [...state.order, action.payload],
				sum: [...state.order, action.payload].reduce((sum, current) => sum + +current.price, 0)
			}
		case 'REMOVE':
			return {
				...state,
				order: [...state.order].filter((item, i) => i !== action.payload),
				sum: [...state.order].filter((item, i) => i !== action.payload).reduce((sum, current) => sum + +current.price, 0)
			}
		default: return state;
	}
}

export default order