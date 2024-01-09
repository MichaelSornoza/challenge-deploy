import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Container from '.'
describe('Container component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Container>
        <div>Test Content</div>
      </Container>
    )

    const childElement = getByText('Test Content')

    expect(childElement).toBeInTheDocument()
  })

  it('renders with the correct class name', () => {
    const { container } = render(
      <Container>
        <div>Test Content</div>
      </Container>
    )

    expect(container.firstChild).toHaveClass('container')
  })
})
