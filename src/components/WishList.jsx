import { useSelector } from "react-redux"
import AllProduct from "./AllProduct"
import Empty from "./Empty";


function WishList() {
    const wishList = useSelector(store => store.wishList.items)
    console.log(wishList);

    return (
        <div>
            <div>
      {wishList.length === 0 ? <Empty page={

        <div>
          <div className="text-2xl font-bold mt-12">
            !!! No items in the wishlist currently !!!
          </div>

          <div className="text-sm text-gray-500 mt-2 text-center">
            Shop to add items to the wishlist.
          </div>
        </div>

      }
      /> : wishList.map((item) => (
        <AllProduct
          key={item.id}
          product={item}
        />
      ))}
    </div>
        </div>
    )
}

export default WishList
