import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Plus from '.'

describe('Plus component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Plus />)
    expect(container.firstChild).toBeInTheDocument()
  })
})
