export interface IInfoProps {
  total: number
  price: number
  amount: number
}

const Info = ({ total, price, amount }: IInfoProps): JSX.Element => {
  return (
    <footer className="cart-product-footer">
      <div className="cart-price">
        <div>
          Precio: <span>$ {price}</span>
        </div>
        <div>
          <span className="cart-counter">x {amount}</span>
        </div>
      </div>
      <div className="total">
        Total: <span>$ {total}</span>
      </div>
    </footer>
  )
}

export default Info
