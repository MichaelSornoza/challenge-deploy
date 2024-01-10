import { type IProduct } from '@/types/products'
import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { fakeData } from '@/utils/fakeData'

export interface IStockSliceState {
  items: IProduct[]
  loading: boolean
}

const initialState: IStockSliceState = {
  items: [...fakeData],
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
    },
    addNewProduct: (state, action: PayloadAction<IProduct>) => {
      state.items.push(action.payload)
    }
  }
})

export const { fetchStockSuccess, fetchStockError, addNewProduct } = stockSlice.actions

export default stockSlice.reducer
