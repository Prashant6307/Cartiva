import { useDispatch, useSelector } from "react-redux"
import { addItems, removeItem } from "../utils/cartSlice"
import { addWishlistItem, removeWishlistItem } from "../utils/wishListSlice"
import { useNavigate } from "react-router-dom"



function AllProduct({ product }) {
    const cart = useSelector(store => store.cart.items)
    const wishList = useSelector(store => store.wishList.items)
    const navigate = useNavigate()
    
    const dispatch = useDispatch()

    const isAdded = cart.some(
        item => item.id === product.id
    )
    const isWishListAdded = wishList.some(
        item => item.id === product.id
    )
    

    return (
        <div onClick={()=> navigate(`/product/${product.id}`)}>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={product.thumbnail}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title flex flex-wrap">
                        {product.title}

                        <div className="badge badge-secondary">{product.availabilityStatus}</div>
                        <p>${product.price}</p>
                    </h2>
                    <p>{product.description}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => {
                            if (isWishListAdded) {
                                dispatch(removeWishlistItem(product.id));
                            } else {
                                dispatch(addWishlistItem(product));
                            }
                        }} className="btn btn-square btn-xs sm:btn-sm md:btn-md">
                            {isWishListAdded ? (
                                // Filled heart
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="size-[1.2em]"
                                    title="add"
                                >
                                    <title>Remove from Wishlist</title>
                                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.39 2.25 8.75 2.25 5.66 4.71 3.25 7.75 3.25c1.75 0 3.42.82 4.5 2.11 1.08-1.29 2.75-2.11 4.5-2.11 3.04 0 5.5 2.41 5.5 5.5 0 3.64-2.438 6.61-4.738 8.757a25.18 25.18 0 01-4.244 3.17 15.247 15.247 0 01-.383.218l-.022.012-.007.003-.003.001a.75.75 0 01-.708 0l-.003-.001z" />
                                </svg>
                            ) : (
                                // Outline heart
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2.5"
                                    stroke="currentColor"
                                    className="size-[1.2em]"
                                >
                                    <title>Add to Wishlist</title>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                    />
                                </svg>
                            )}
                        </button>
                        <button onClick={() => {
                            if (isAdded) {
                                dispatch(removeItem(product.id));
                            } else {
                                dispatch(addItems(product));
                            }
                        }} className="btn btn-xs sm:btn-sm md:btn-md ">{isAdded ? "Remove from Cart" : "Add to Cart"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProduct
