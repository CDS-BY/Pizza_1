import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from '../../hooks/http.hook'

const initialState = {
	items: [],
	itemsLoadingStatus: 'idle'
}

export const fetchItems = createAsyncThunk(
	'items/fetchItems',
	() => {
		const {request} = useHttp()
		return request('https://6449e9f7a8370fb32140d3a9.mockapi.io/users')
	}
)

const itemsSlice = createSlice ({
	name: 'items',
	initialState,
	reducers: {
		itemsFetching: state => {state.itemsLoadingStatus = 'loading'}, 
		itemsFetched: (state, action) => {
			state.itemsLoadingStatus = 'idle'
			state.items = action.payload}, 
		itemsFetchingError: state => {state.itemsLoadingStatus = 'error'} 
	},
	extraReducers: (buider) => {
		buider
			.addCase(fetchItems.pending, state => {state.itemsLoadingStatus = 'loading'})
			.addCase(fetchItems.fulfilled, (state, action) => {
				state.itemsLoadingStatus = 'idle'
				state.items = action.payload[0].pizza})
			.addCase(fetchItems.rejected, state => {state.itemsLoadingStatus = 'error'} )
			.addDefaultCase(() => {})
	}
})

const {reducer, actions} = itemsSlice

export default reducer
export const {
	itemsFetching,
	itemsFetched,
	itemsFetchingError
} = actions