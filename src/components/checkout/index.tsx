export interface ICheckoutProps {
  totalPrice: number
  onClick: () => void
}

const Checkout = ({ totalPrice, onClick }: ICheckoutProps): JSX.Element => {
  return (
    <div className='checkout'>
      <div className="checkout-title">
        <h1>Este es tu carrito de compras</h1>
      </div>
      <div className="checkout-price-container">
        <div className="checkout-price">
          <h3>
            $ {totalPrice}
          </h3>
        </div>
        <div className="checkout-buttons">
          <button type="button" className="success" onClick={() => { onClick() }}>Pagar</button>
        </div>
      </div>
    </div>
  )
}

export default Checkout
