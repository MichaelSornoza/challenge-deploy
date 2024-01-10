import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import Providers from './providers'

const MockChildComponent = (): JSX.Element => {
  const value = 'Test'
  return <div>{value}</div>
}

describe('Providers Component', () => {
  it('provides Redux store to child components', () => {
    render(
      <Providers>
        <MockChildComponent />
      </Providers>
    )

    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})
