import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addWishlistItem, removeWishlistItem } from "../utils/wishListSlice";
import { addItems } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";

function ProductsDetails() {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch()


    const cart = useSelector(store => store.cart.items);
    const wishList = useSelector(store => store.wishList.items);

    const isAdded = cart.some(
        item => item.id === product?.id
    )  
    const isWishListAdded = wishList.some(
        item => item.id === product?.id
    )


    useEffect(() => {
        const getProduct = async () => {
            const res = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await res.json();

            setProduct(data);
        }
        getProduct();
    }, [id]);





    return (
        <div className="min-h-screen bg-base-200 p-4 md:p-8">

            <div className="max-w-6xl mx-auto bg-base-100 rounded-xl shadow-lg p-5 md:p-8">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


                    {/* Product Image */}
                    <div className="flex justify-center items-center">

                        <img
                            src={product?.thumbnail}
                            alt={product?.title}
                            className="
                            w-full 
                            max-w-md
                            rounded-xl
                            object-cover
                            "
                        />

                    </div>



                    {/* Product Details */}
                    <div className="space-y-5">

                        <h1 className="text-2xl md:text-4xl font-bold">
                            {product?.title}
                        </h1>


                        <p className="text-gray-500">
                            {product?.description}
                        </p>


                        <div className="flex items-center gap-3">

                            <span className="badge badge-primary">
                                {product?.category}
                            </span>

                            <span className="badge badge-secondary">
                                ⭐ {product?.rating}
                            </span>

                        </div>



                        <h2 className="text-3xl font-bold text-primary">
                            ${product?.price}
                        </h2>



                        <div>
                            <p>
                                <span className="font-semibold">
                                    Brand:
                                </span>
                                {" "}
                                {product?.brand}
                            </p>


                            <p>
                                <span className="font-semibold">
                                    Stock:
                                </span>
                                {" "}
                                {product?.stock} available
                            </p>

                        </div>



                        <div className="flex gap-3 flex-wrap">

                            <button
                                onClick={() => {
                                    if (isAdded) {
                                        dispatch(removeItem(product.id));
                                    } else {
                                        dispatch(addItems(product));
                                    }
                                }}
                                className={`btn ${isAdded ? "btn-error" : "btn-primary"}`}
                            >
                                {isAdded ? "Remove from Cart" : "Add to Cart"}
                            </button>


                            <button
                                onClick={() => {
                                    if (isWishListAdded) {
                                        dispatch(removeWishlistItem(product.id));
                                    } else {
                                        dispatch(addWishlistItem(product));
                                    }
                                }}
                                className="btn btn-outline"
                            >
                                {isWishListAdded ? "Remove from Wishlist" : "Add to Wishlist"}
                            </button>

                        </div>


                    </div>


                </div>

            </div>


            {/* Additional Images */}
            <div className="max-w-6xl mx-auto mt-8">

                <h2 className="text-2xl font-bold mb-4">
                    More Images
                </h2>


                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                    {
                        product?.images.map((img) => (
                            <img
                                key={img}
                                src={img}
                                className="rounded-lg shadow"
                            />
                        ))
                    }

                </div>

            </div>

            {/* Reviews Section */}
            <div className="max-w-6xl mx-auto mt-10">

                <h2 className="text-2xl md:text-3xl font-bold mb-5">
                    Customer Reviews
                </h2>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    {
                        product?.reviews?.map((review, index) => (
                            <div
                                key={index}
                                className="card bg-base-100 shadow-md"
                            >

                                <div className="card-body">

                                    <div className="flex justify-between items-center">

                                        <h3 className="font-semibold text-lg">
                                            {review.reviewerName}
                                        </h3>


                                        <div className="badge badge-warning">
                                            ⭐ {review.rating}
                                        </div>

                                    </div>


                                    <p className="text-gray-500">
                                        {review.comment}
                                    </p>


                                    <p className="text-sm">
                                        {review.date}
                                    </p>

                                </div>

                            </div>
                        ))
                    }

                </div>

            </div>

        </div>
    )
}


export default ProductsDetails;