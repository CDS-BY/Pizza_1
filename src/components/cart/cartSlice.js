import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
	items: [],
	sum: 0
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addCartItem: (state, action) => {
			state.items.push(action.payload)
			state.sum = state.items.reduce((sum, current) => sum + +current.price, 0)
		},
		removeCartItem: (state, action) => {

			state.items = state.items.filter((item, i) => i !== action.payload)
			state.sum =  state.items.reduce((sum, current) => sum + +current.price, 0)
		}
	}
})

const {actions, reducer} = cartSlice

export default reducer
export const {
	addCartItem,
	removeCartItem
} = actions