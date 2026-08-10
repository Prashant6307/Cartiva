import { useSelector } from "react-redux"
import AllProduct from "./AllProduct"
import Empty from "./Empty"

function Cart() {
  const cart = useSelector(store => store.cart.items)
  return (
    <div>
      {cart.length === 0 ? <Empty page={

        <div>
          <div className="text-2xl font-bold mt-12">
            !!! No items in the cart currently !!!
          </div>

          <div className="text-sm text-gray-500 mt-2 text-center">
            Shop to add items to the cart.
          </div>
        </div>

      }
      /> : cart.map((item) => (
        <AllProduct
          key={item.id}
          product={item}
        />
      ))}
    </div>
  )
}

export default Cart
