import { useSelector } from "react-redux"
import AllProduct from "./AllProduct"


function WishList() {
    const wishList = useSelector(store => store.wishList.items)
    console.log(wishList);

    return (
        <div>
            {wishList.map((item) => (
                <AllProduct
                    key={item.id}
                    product={item}
                />
            ))}
        </div>
    )
}

export default WishList
