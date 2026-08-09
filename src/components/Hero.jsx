import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../utils/productSlice";
import AllProduct from "./AllProduct";


function Hero() {
    const product = useSelector((store) => store.products.products)
    const dispatch = useDispatch()

    const getProducts = async () => {
        const res = await fetch("https://dummyjson.com/products")
        const data = await res.json()
        console.log(data.products);
        dispatch(addProducts(data.products))
    }
    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className="flex flex-wrap gap-4 mt-4 p-4 justify-center">
            {product.map((item) => (
                <AllProduct key={item.id} title={item.title} price={item.price} thumbnail={item.thumbnail} description={item.description} availability={item.availabilityStatus} />
            ))}
        </div>
    )
}

export default Hero
