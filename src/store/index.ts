import { configureStore } from '@reduxjs/toolkit'
import stock from './slices/stock'
import cart from './slices/cart'

const store = configureStore({
  reducer: {
    stock,
    cart
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
