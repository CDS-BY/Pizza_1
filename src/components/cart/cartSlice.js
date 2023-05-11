import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

// const initialState = {
// 	items: [],
// 	sum: 0
// }

const cartAdapter = createEntityAdapter()
const initialState = cartAdapter.getInitialState({
	sum: 0
});

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addCartItem: (state, action) => {
			cartAdapter.addOne(state, action.payload)
		},
		removeCartItem: (state, action) => {
			cartAdapter.removeOne(state, action.payload)
		},
		calcSum: (state, action) => {
			state.sum = action.payload
		}
	}
})

const {actions, reducer} = cartSlice

export default reducer

export const { selectAll } = cartAdapter.getSelectors(state => state.cart) 

export const {
	addCartItem,
	removeCartItem,
	calcSum
} = actions