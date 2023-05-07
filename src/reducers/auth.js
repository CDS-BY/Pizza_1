const initialState = {
	name: '',
	tel: '',
	password: '',
	adress: '',
	authLoadingStatus: 'idle',
	modalOpen: false
}

const auth = (state = initialState, action) => {
	switch (action.type) {	
		case 'AUTH_FETCHING':
			return {
				...state,
				authLoadingStatus: 'loading'
			}
		case 'AUTH_FETCHED':
			return {
				...state,
				authLoadingStatus: 'idle'
			}
		case 'AUTH_FETCHING_ERROR':
			return {
				...state,
				authLoadingStatus: 'error'
			}
		case 'TOGGLE_MODAL':
			return {
				...state,
				modalOpen: !state.modalOpen
			}
		default: return state;
	}
}

export default auth