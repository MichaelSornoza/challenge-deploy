import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Cart from '.'

describe('Cart component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Cart />)
    expect(container.firstChild).toBeInTheDocument()
  })
})
