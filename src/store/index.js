import { configureStore } from '@reduxjs/toolkit'

import items from '../components/items/itemsSlice'
import cart from '../components/cart/cartSlice'
import modal from '../components/authModall/modalSlice'

const store = configureStore({
	reducer: {items, cart, modal},
	middleware: getDefaultMiddleware => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV !== 'production'
})

export default store