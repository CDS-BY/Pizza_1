import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const initialState = {
	wokItems: [],
	wokItemsLoadingStatus: 'idle',
	showWok: false
}

export const fetchWokItems = createAsyncThunk(
	'wok/fetchWokItems',
	() => {
		const {request} = useHttp()
		return request('https://6449e9f7a8370fb32140d3a9.mockapi.io/users')
	}
)

const wokSlice = createSlice({
	name: 'wok',
	initialState,
	reducers: {
		wokItemsFetching: state => {state.wokItemsLoadingStatus = 'loading'}, 
		wokItemsFetched: (state, action) => {
			state.wokItemsLoadingStatus = 'idle'
			state.wokItems = action.payload}, 
		wokItemsFetchingError: state => {state.wokItemsLoadingStatus = 'error'} ,
		showWok: state => {state.showWok = !state.showWok} 
	},
	extraReducers: (buider) => {
		buider
			.addCase(fetchWokItems.pending, state => {state.wokItemsLoadingStatus = 'loading'})
			.addCase(fetchWokItems.fulfilled, (state, action) => {
				state.wokItemsLoadingStatus = 'idle'
				state.wokItems = action.payload[0].wok})
			.addCase(fetchWokItems.rejected, state => {state.wokItemsLoadingStatus = 'error'} )
			.addDefaultCase(() => {})
	}
})

const {actions, reducer} = wokSlice

export default reducer
export const {
	wokItemsFetching,
	wokItemsFetched,
	wokItemsFetchingError,
	showWok
} = actions