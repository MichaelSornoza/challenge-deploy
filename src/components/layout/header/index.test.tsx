import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Header from '.'

describe('Header component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Header />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('renders the logo with a link to the homepage', () => {
    const { getByText } = render(<Header />)
    const logoLink = getByText('Logo')

    expect(logoLink).toBeInTheDocument()
    expect(logoLink.closest('a')).toHaveAttribute('href', '/')
  })
})
