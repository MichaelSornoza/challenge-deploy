import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Add from '.'

describe('Add', () => {
  it('should render the component with the correct props', () => {
    render(<Add counter={1} amount={10} handleCounter={() => { }} addItemToCart={() => { }} />)
  })

  it('should display the counter and amount values', () => {
    const { getByText } = render(<Add counter={1} amount={10} handleCounter={() => { }} addItemToCart={() => { }} />)
    expect(getByText('1 / 10')).toBeInTheDocument()
  })

  it('should increment the counter when the "+" button is clicked', () => {
    const handleCounter = jest.fn()
    const { getByText } = render(<Add counter={1} amount={10} handleCounter={handleCounter} addItemToCart={() => { }} />)
    fireEvent.click(getByText('+'))
    expect(handleCounter).toHaveBeenCalledWith('add')
  })

  it('should allow the counter and amount to be 0', () => {
    const handleCounter = jest.fn()
    const { getByText } = render(<Add counter={0} amount={0} handleCounter={handleCounter} addItemToCart={() => { }} />)
    fireEvent.click(getByText('+'))
    expect(handleCounter).toHaveBeenCalledWith('add')
  })
})
