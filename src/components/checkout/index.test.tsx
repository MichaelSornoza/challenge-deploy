import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Checkout from '.'

describe('Checkout', () => {
  const onClickMock = jest.fn()

  it('should render the component with the correct title and price', () => {
    render(<Checkout totalPrice={100} onClick={() => { }} />)
    const titleElement = screen.getByText(/Este es tu carrito de compras/i)
    const priceElement = screen.getByText(/\$ 100/i)
    expect(titleElement).toBeInTheDocument()
    expect(priceElement).toBeInTheDocument()
  })

  it('should display the total price correctly', () => {
    render(<Checkout totalPrice={200} onClick={onClickMock} />)
    const priceElement = screen.getByText(/\$ 200/i)
    expect(priceElement).toBeInTheDocument()
  })

  it('should call the onClick function when the "Pagar" button is clicked', () => {
    render(<Checkout totalPrice={100} onClick={onClickMock} />)
    const pagarButton = screen.getByRole('button', { name: /pagar/i })
    fireEvent.click(pagarButton)
    expect(onClickMock).toHaveBeenCalled()
  })

  it('should display the total price as $ 0 when totalPrice is 0', () => {
    render(<Checkout totalPrice={0} onClick={() => { }} />)
    const priceElement = screen.getByText(/\$ 0/i)
    expect(priceElement).toBeInTheDocument()
  })

  it('should display the total price correctly when totalPrice is negative', () => {
    render(<Checkout totalPrice={-100} onClick={() => { }} />)
    const priceElement = screen.getByText(/\$ -100/i)
    expect(priceElement).toBeInTheDocument()
  })
})
