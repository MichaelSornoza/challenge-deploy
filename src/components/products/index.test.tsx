import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Products from '.'
import { type RootState } from '@/store'

const mockStore = configureStore([])

describe('Products Component', () => {
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

  it('Displays Products With Amount Greater Than Zero', () => {
    const store = mockStore(initialState)
    render(
      <Provider store={store}>
        <Products />
      </Provider>
    )

    expect(screen.getByText('Producto 1')).toBeInTheDocument()
    expect(screen.queryByText('Producto 2')).not.toBeInTheDocument()
    expect(screen.getByText('Producto 3')).toBeInTheDocument()
  })
})
