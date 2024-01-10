'use client'

import Form from '@/components/form'
import { type RootState } from '@/store'
import { addNewProduct } from '@/store/slices/stock'
import { type IProduct } from '@/types/products'
import { products } from '@/utils/columns'
import DataTable from 'react-data-table-component'
import { useDispatch, useSelector } from 'react-redux'

const AdminPage = (): JSX.Element => {
  const { items } = useSelector((state: RootState) => state.stock)

  const dispatch = useDispatch()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    const form = new FormData(e.currentTarget)
    const data = Object.fromEntries(form.entries())

    const productData: IProduct = {
      name: typeof data.name === 'string' ? data.name : '',
      price: typeof data.price === 'string' ? parseFloat(data.price) : 0,
      amount: typeof data.stock === 'string' ? parseInt(data.stock) : 0,
      image: typeof data.image === 'string' ? data.image : '',
      id: items[items.length - 1].id + 1
    }

    dispatch(addNewProduct(productData))

    e.currentTarget.reset()
  }

  return (
    <main className="admin-page">
      <section className="grid-products bg-light">
        <DataTable columns={products} data={items} />
      </section>
      <section className="grid-products bg-light form-section">
        <Form onSubmit={onSubmit} />
      </section>
    </main>
  )
}

export default AdminPage
