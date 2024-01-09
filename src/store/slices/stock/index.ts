import { type IProduct } from '@/types/products'
import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface IStockSliceState {
  items: IProduct[]
  loading: boolean
}

const initialState: IStockSliceState = {
  items: [],
  loading: true
}

const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    fetchStockSuccess: (state, action: PayloadAction<IProduct[]>) => {
      state.items = action.payload
      state.loading = false
    },
    fetchStockError: (state) => {
      state.loading = false
    }
  }
})

export const { fetchStockSuccess, fetchStockError } = stockSlice.actions

export default stockSlice.reducer
