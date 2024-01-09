import CartPlus from '@/components/icons/cart/plus'

export interface IAddProps {
  counter: number
  amount: number
  handleCounter: (type: string) => void
  addItemToCart: () => void
}

const Add = ({ counter, amount, handleCounter, addItemToCart }: IAddProps): JSX.Element => {
  return (
    <footer>
      <div className="counter-container">
        <div className="counter">
          <button type="button" className="primary" onClick={() => { handleCounter('') }}>-</button>
          <span>{counter} / {amount}</span>
          <button type="button" className="primary" onClick={() => { handleCounter('add') }}>+</button>
        </div>
        <div className="cart-button-container">
          <button type="button" disabled={counter === 0} className="icon-button success" onClick={addItemToCart}>
            <CartPlus />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Add
