import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Product from '.'
import { type IProduct } from '@/types/products'

const mockStore = configureStore([])
const productMock: IProduct = {
  id: 1,
  name: 'Producto de Prueba',
  price: 10,
  amount: 5,
  image: 'url-de-la-imagen'
}

describe('Product Component', () => {
  let store: ReturnType<typeof mockStore>

  beforeEach(() => {
    store = mockStore({
    })
  })

  it('Allows Adding a Product to the Counter', async () => {
    render(
      <Provider store={store}>
        <Product product={productMock} />
      </Provider>
    )

    const addButton = screen.getByText('+')
    await userEvent.click(addButton)

    expect(screen.getByText('1 / 5')).toBeInTheDocument()
  })

  it('Enables "Add to Cart" Button When Counter is Not Zero', async () => {
    render(
      <Provider store={store}>
        <Product product={productMock} />
      </Provider>
    )

    const addButton = screen.getByText('+')
    await userEvent.click(addButton)

    const addToCartButton = screen.getByRole('button', { name: 'add-to-cart' })
    expect(addToCartButton).not.toBeDisabled()
  })
})
