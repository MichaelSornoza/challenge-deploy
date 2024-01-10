import '@testing-library/jest-dom'

import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux' // Importa Provider para envolver el componente
import configureStore from 'redux-mock-store'
import { type RootState } from '@/store'

import AdminPage from './page'

const mockStore = configureStore([])

describe('AdminPage component', () => {
  const initialState: Partial<RootState> = {
    stock: {
      loading: false,
      items: [
        { id: 1, name: 'Producto 1', price: 10, amount: 3, image: 'url1' },
        { id: 2, name: 'Producto 2', price: 20, amount: 0, image: 'url2' },
        { id: 3, name: 'Producto 3', price: 30, amount: 5, image: 'url3' }
      ]
    }
  }

  const store = mockStore(initialState)

  it('renders the component without errors', () => {
    render(
      <Provider store={store}>
        <AdminPage />
      </Provider>
    )
  })

  it('submits the form correctly', () => {
    const { getByRole, getByPlaceholderText } = render(
      <Provider store={store}>
        <AdminPage />
      </Provider>
    )

    fireEvent.change(getByPlaceholderText('Name'), { target: { value: 'Test Product' } })
    fireEvent.change(getByPlaceholderText('Price'), { target: { value: '10' } })
    fireEvent.change(getByPlaceholderText('Stock'), { target: { value: '5' } })
    fireEvent.change(getByPlaceholderText('Image'), { target: { value: 'test-image.jpg' } })

    const submitButton = getByRole('button', { name: 'Add' })
    fireEvent.click(submitButton)
  })
})
