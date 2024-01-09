'use client'
import Checkout from '@/components/checkout'
import Product from '@/components/products/product'
// import '@/css/styles.css'

import { type RootState } from '@/store'
import { resetCart } from '@/store/slices/cart'
import { fetchStockSuccess } from '@/store/slices/stock'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'

const Cart = (): JSX.Element => {
  const { cart, stock } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  const router = useRouter()

  const items = cart.items.map(
    (item) =>
      stock.items.find((stockItem) => stockItem.id === item.id)
  ).map((resultItem) => resultItem?.price) as number[]
  const totalPrice = items.reduce((acc, price) => acc + price, 0)

  const handleCheckout = (): void => {
    const stockItems = [...stock.items]

    cart.items.forEach((item) => {
      const index = stockItems.findIndex((stock) => stock.id === item.id)

      stockItems[index] = {
        ...stockItems[index],
        amount: stockItems[index].amount - item.amount
      }
    })

    dispatch(fetchStockSuccess(stockItems))
    dispatch(resetCart())
    router.push('/', { scroll: false })
  }

  return (
    <main className="cart-page">
      <Checkout totalPrice={totalPrice} onClick={handleCheckout} />
      <div className="grid-products">
        {
          cart.items.map((item, index) => {
            const product = stock.items.find((product) => product.id === item.id)! // eslint-disable-line

            return (
              <div className="product" key={`cart-${index}`}>
                <Product isCart product={product} amount={item.amount} />
              </div>
            )
          })
        }
      </div>
    </main>
  )
}

export default Cart
