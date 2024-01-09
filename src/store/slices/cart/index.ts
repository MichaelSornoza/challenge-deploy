import { type RootState } from '@/store'
// import type { IProduct } from '@/types/products'
import type { ICartProduct } from '@/types/cart'
import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface ICartSliceState {
  items: ICartProduct[]
}

const initialState: ICartSliceState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartProduct>) => {
      const { id, amount } = action.payload
      const item = state.items.find((item) => item.id === id)
      if (item != null) {
        item.amount = amount
      } else {
        state.items.push({ id, amount })
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    resetCart: (state) => {
      state = initialState
    }
  }
})

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions

export const selectCartItems = (state: RootState): ICartProduct[] => state.cart.items

export default cartSlice.reducer
