const initialState = {
							value: 0,
							modal: false,
							items: [],
							order: [],
							sum: 0
						}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD':
			return {
				...state,
				order: [...state.order, action.payload]
			};
		case 'REMOVE':
			return {
				...state,
				// тут нужно убрать из массива определенный элем (скорее всего по id, но как его передать) 
				order: [...state.order].filter((item, i) => i !== action.payload)
			};
		default:
			return state;
	}
}

export default reducer