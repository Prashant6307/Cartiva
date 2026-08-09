import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addCategory } from "../utils/categorySlice";
import AllProduct from "./AllProduct";

function Category() {
    const dispatch = useDispatch()
    const { category } = useParams()
    const prodCategory = useSelector(store => store.category.category)

    const getCategoryProducts = async () => {
            const res = await fetch(`https://dummyjson.com/products/category/${category}`)
            const data = await res.json()
            console.log(data);
            dispatch(addCategory(data.products))
        }
        useEffect(() => {
            getCategoryProducts()
        }, [category])

  return (
    <div className="flex flex-wrap gap-4 mt-4 p-4 justify-center">
        {
    prodCategory.map((item)=>(
        <AllProduct 
        key={item.id} 
        title={item.title} 
        price={item.price} 
        thumbnail={item.thumbnail} 
        description={item.description} 
        availability={item.availabilityStatus} />
    ))
}
    </div>
  )
}

export default Category
