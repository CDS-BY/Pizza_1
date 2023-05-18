import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const initialState = {
	wokItems: [],
	wokName: '0-0',
	wokPrice: '0-0',
	wokWeight: '0-0',
	wokImageUrl: '0-0',
	wokId: '',
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
		toggleWok: state => {state.showWok = !state.showWok} ,
		setWok: (state, action) => {
			state.wokName = action.payload.name
			state.wokPrice = action.payload.price
			state.wokWeight = action.payload.weight
			state.wokId = action.payload.id
			state.wokImageUrl = action.payload.imageUrl},
	},
	extraReducers: (builder) => {
		builder
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
	toggleWok,
	setWok
} = actions