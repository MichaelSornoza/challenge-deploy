import { type IProduct } from '@/types/products'
import { type TableColumn } from 'react-data-table-component'

const products: Array<TableColumn<IProduct>> = [
  {
    name: 'ID',
    id: 'id',
    sortable: true,
    cell: (row) => {
      return (
        <span>{row.id} </span>
      )
    }
  },
  {
    name: 'Name',
    id: 'name',
    sortable: true,
    cell: (row) => {
      return (
        <span>{row.name} </span>
      )
    }
  },
  {
    name: 'Price',
    id: 'price',
    sortable: true,
    cell: (row) => {
      return (
        <span>{row.price} </span>
      )
    }
  },
  {
    name: 'Stock',
    id: 'amount',
    sortable: true,
    cell: (row) => {
      return (
        <span>{row.amount} </span>
      )
    }
  },
  {
    name: 'Image',
    id: 'image',
    sortable: true,
    cell: (row) => {
      return (
        <span>{row.image} </span>
      )
    }
  }
]

export { products }
