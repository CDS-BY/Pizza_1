import { configureStore } from '@reduxjs/toolkit'

import items from '../components/items/itemsSlice'
import cart from '../components/cart/cartSlice'
import modal from '../components/authModall/modalSlice'
import wok from '../components/wok/wokSlice'

const store = configureStore({
	reducer: {items, cart, modal, wok},
	middleware: getDefaultMiddleware => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV !== 'production'
})

export default store