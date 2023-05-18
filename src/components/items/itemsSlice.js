import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { useHttp } from '../../hooks/http.hook'

const itemsAdapter = createEntityAdapter()

const initialState = itemsAdapter.getInitialState({
	itemsLoadingStatus: 'idle'
})

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
				// state.items = action.payload[0].pizza})
				itemsAdapter.setAll(state, action.payload[0].pizza)})
			.addCase(fetchItems.rejected, state => {state.itemsLoadingStatus = 'error'} )
			.addDefaultCase(() => {})
	}
})

const {reducer, actions} = itemsSlice

export default reducer

export const {selectAll} = itemsAdapter.getSelectors(state => state.items)

export const {
	itemsFetching,
	itemsFetched,
	itemsFetchingError
} = actions