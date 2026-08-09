import { Link } from "react-router-dom"

function CategoryNav() {
    const categories = [
        {
            name: "Electronics",
            slug: "smartphones"
        },
        {
            name: "Laptops",
            slug: "laptops"
        },
        {
            name: "Fashion",
            slug: "mens-shirts"
        },
        {
            name: "Women's Fashion",
            slug: "womens-dresses"
        },
        {
            name: "Beauty",
            slug: "beauty"
        },
        {
            name: "Home & Living",
            slug: "furniture"
        },
        {
            name: "Groceries",
            slug: "groceries"
        },
        {
            name: "Sports",
            slug: "sports-accessories"
        }
    ]

    return (
        <div className="bg-gray-100">
            <ul className="flex justify-between mx-20 p-4 ">
                {
                    categories.map((item) => (
                        <li key={item.slug} className="hover:bg-gray-300  text-xl p-2 rounded-lg font-bold" >
                            <Link to={`/products/${item.slug}`}>
                                {item.name}
                            </Link>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

export default CategoryNav
