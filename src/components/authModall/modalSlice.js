import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	users: [
		{
			tel: '+123456',
			password: 'qwerty',
			adress: 'd4',
		}
	],
	authLoadingStatus: 'idle',
	modalOpen: false
}

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		authFetching: state => {state.authLoadingStatus = 'loading'},
		authFetched: state => {state.authLoadingStatus = 'idle'},
		authFetchingError: state => {state.authLoadingStatus = 'error'},
		toggleModal: state => {state.modalOpen = !state.modalOpen}
	}
})

const {actions, reducer} = modalSlice

export default reducer
export const {
	authFetching,
	authFetched,
	authFetchingError,
	toggleModal
} = actions