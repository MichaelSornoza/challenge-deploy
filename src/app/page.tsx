'use client'

import Products from '@/components/products'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchStockSuccess } from '@/store/slices/stock'
import { fakeData } from '@/utils/fakeData'
import { type RootState } from '@/store'

const Home = (): JSX.Element => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootState) => state.stock)

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchStockSuccess(fakeData))
    }
  }, [])

  return (
    <main>
      <Products />
    </main>
  )
}

export default Home
