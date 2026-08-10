import { useSelector } from "react-redux"
import AllProduct from "./AllProduct"

function Cart() {
  const cart = useSelector(store => store.cart.items)
  return (
    <div>
      {cart.map((item) => (
        <AllProduct
          key={item.id}
          product={item}
        />
      ))}
    </div>
  )
}

export default Cart
