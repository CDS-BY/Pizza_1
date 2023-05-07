import { configureStore } from '@reduxjs/toolkit'

import items from '../components/items/itemsSlice'
import cart from '../components/cart/cartSlice'
import auth from '../reducers/auth'

const store = configureStore({
	reducer: {items, cart, auth},
	middleware: getDefaultMiddleware => getDefaultMiddleware(),
	devTools: process.env.NODE_ENV !== 'production'
})

export default store