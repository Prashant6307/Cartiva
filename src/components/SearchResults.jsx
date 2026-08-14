import { useEffect } from "react"
import { useParams } from "react-router-dom"
import AllProduct from "./AllProduct"
import { useDispatch, useSelector } from "react-redux"
import { addProducts } from "../utils/productSlice"

function SearchResults() {

    const { query } = useParams()
    const dispatch = useDispatch()
    const product = useSelector((store) => store.products.products)

    const getQueryResults = async(query)=>{
        const res = await fetch(`https://dummyjson.com/products/search?q=${query}`)
        const data = await res.json()
        dispatch(addProducts(data.products))
    }
    useEffect(()=>{
        getQueryResults(query)
    },[query])
  return (
    <div className="flex flex-wrap p-8 gap-8 justify-center">
        {product.map((item) => (
                <AllProduct
                    key={item.id}
                    product={item}
                />
            ))}
    </div>
  )
}

export default SearchResults
