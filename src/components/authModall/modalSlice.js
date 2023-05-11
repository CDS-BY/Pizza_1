import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: {
				email: null,
				// password: 'qwerty',
				token: null,
				id: null,
				adress: null,
			},
	authLoadingStatus: 'idle',
	modalOpen: false
}

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		setUser: (state, action) => {
			console.log(action.payload)
			state.user.email = action.payload.email
			state.user.token = action.payload.token
			state.user.id = action.payload.id
		},
		removeUser: state => {
			state.user.email = null
			state.user.token = null
			state.user.id = null
		},
		authFetching: state => { state.authLoadingStatus = 'loading' },
		authFetched: state => { state.authLoadingStatus = 'idle' },
		authFetchingError: state => { state.authLoadingStatus = 'error' },
		toggleModal: state => { state.modalOpen = !state.modalOpen }
	}
})

const { actions, reducer } = modalSlice

export default reducer
export const {
	authFetching,
	authFetched,
	authFetchingError,
	toggleModal,
	setUser,
	removeUser
} = actions