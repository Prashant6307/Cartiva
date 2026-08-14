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
            <div className="hidden sm:block">
                <ul className="flex justify-between p-4 ">
                {
                    categories.map((item) => (
                        <li key={item.slug} className="hover:bg-gray-300 text-xs  sm:text-[12px] md:text-md lg:text-xl p-2 rounded-lg font-bold" >
                            <Link to={`/products/${item.slug}`}>
                                {item.name}
                            </Link>
                        </li>
                    ))


                }

            </ul>
            </div>
            

            <div className="flex sm:hidden p-4">
                <div className="drawer ">
                    <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-1" className="btn drawer-button">Categories</label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 min-h-full w-80 p-4">
                            {
                                categories.map((item) => (
                                    <li key={item.slug} className="">
                                        <Link to={`/products/${item.slug}`}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))


                            }
                        </ul>
                    </div>
                </div>
                <ul className="flex items-center gap-4 font-bold px-1">
                    <li className="hover:bg-gray-300 p-2 rounded-lg"><Link to={"/"}>Home</Link></li>
                    <li className="hover:bg-gray-300 p-2 rounded-lg"><Link to={"wishlist"}>Wishlist</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default CategoryNav
