import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

// const initialState = {
// 	items: [],
// 	sum: 0
// }

const cartAdapter = createEntityAdapter()
const initialState = cartAdapter.getInitialState({
	// items: [],
	sum: 1
});

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addCartItem: (state, action) => {
			// state.items.push(action.payload)
			cartAdapter.addOne(state, action.payload)
			// state.sum = state.carts.reduce((sum, current) => sum + +current.price, 0)
		},
		removeCartItem: (state, action) => {

			// state.items = state.items.filter((item, i) => i !== action.payload)
			cartAdapter.removeOne(state, action.payload)
			// state.sum =  state.items.reduce((sum, current) => sum + +current.price, 0)
		}
	}
})

const {actions, reducer} = cartSlice

export default reducer

export const { selectAll } = cartAdapter.getSelectors(state => state.cart) 

export const {
	addCartItem,
	removeCartItem
} = actions