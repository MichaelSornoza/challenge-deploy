import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Info from '.'

const mockProps = {
  total: 100,
  price: 25,
  amount: 4
}

describe('Info component', () => {
  it('renders the price correctly', () => {
    render(<Info {...mockProps} />)
    const priceElement = screen.getByText(/\$\s*25/i)
    expect(priceElement).toBeInTheDocument()
  })

  it('renders the amount correctly', () => {
    render(<Info {...mockProps} />)
    const amountElement = screen.getByText(`x ${mockProps.amount}`)
    expect(amountElement).toBeInTheDocument()
  })

  it('renders the total correctly', () => {
    render(<Info {...mockProps} />)
    const totalElement = screen.getByText(/\s*\$\s*100/i)
    expect(totalElement).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const { container } = render(<Info {...mockProps} />)
    expect(container).toMatchSnapshot()
  })
})
