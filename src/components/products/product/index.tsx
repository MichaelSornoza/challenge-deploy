/* eslint-disable @typescript-eslint/indent */
/* eslint-disable multiline-ternary */
'use client'

import { addToCart } from '@/store/slices/cart'
import type { IProduct } from '@/types/products'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import Add from './add'
import Info from './info'

export interface IProductProps {
  product: IProduct
  isCart?: boolean
  amount?: number
}

const Product = ({ product, isCart = false, amount }: IProductProps): JSX.Element => {
  const [counter, setCounter] = useState<number>(0)

  const dispatch = useDispatch()

  const handleCounter = (type: string): void => {
    if (type === 'add') {
      if (counter === product.amount) {
        toast.error('No puedes agregar más productos de los que hay en stock', {
          icon: '⚠️',
          duration: 3000
        })

        return
      }
      setCounter(counter + 1)
    } else {
      if (counter === 0) {
        return
      }
      setCounter(counter - 1)
    }
  }

  const addItemToCart = (): void => {
    dispatch(addToCart({
      id: product.id,
      amount: counter
    }))
    toast.success('Producto agregado al carrito')
  }

  const total = product.price * (amount ?? 0) // eslint-disable-line

  return (
    <div className="product" style={{ backgroundImage: `url(${product.image})` }}>
      <div className="content">
        <header>
          <div>
            <h2>{product.name}</h2>
            <span>$ {product.price}</span>
          </div>
        </header>
        {
          !isCart ? (
            <Add counter={counter} amount={product.amount} addItemToCart={addItemToCart} handleCounter={handleCounter} />
          ) : (
            <Info total={total} price={product.price} amount={amount ?? 0} />
          )
        }
      </div>
    </div>
  )
}

export default Product
