import { useState } from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"


function Navbar() {

    const [query, setQuery] = useState("")

    const navigate = useNavigate()
    const cart = useSelector(store => store.cart.items)
    const totalPrice = cart.reduce(
        (total, item) => total + item.price,
        0
    );
    return (
        <nav >
            <div className="navbar bg-base-100 shadow-sm p-4">
                <div className="flex-1">
                    <img src="../images/logo.png" alt="logo" className="w-12 sm:w-28" />
                </div>
                <div className="flex gap-4">
                    <div className="hidden sm:block">
                        <ul className="flex items-center gap-4 font-bold px-1">
                        <li className="hover:bg-gray-300 p-2 rounded-lg"><Link to={"/"}>Home</Link></li>
                        <li className="hover:bg-gray-300 p-2 rounded-lg"><Link to={"wishlist"}>Wishlist</Link></li>
                    </ul>
                    </div>
                    


                    <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && query.trim()) {
                                navigate(`/search/${query}`)
                            }
                        }} placeholder="Search" className="input" 
                        className="px-1 border border-black rounded-md w-28 h-8 sm:w-48"
                        />

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                                <span className="badge badge-sm indicator-item">{cart.length}</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-sm dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">{cart.length} Items</span>
                                <span className="text-info">Subtotal: ${totalPrice.toFixed(2)}</span>
                                <div className="card-actions">
                                    <button onClick={() => navigate("/cart")} className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVKIxuwSqgJuFllKhvtMd6sOtm40ee3j-G3Dl2q9Gn3fRhPgo7mstwpYA&s=10" />
                            </div>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <Link to={"profile"} className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link to={"settings"}>Settings</Link></li>
                            <li><Link to={"login"}>Login</Link></li>
                        </ul>
                    </div>
                </div>
            </div>




        </nav>
    )
}

export default Navbar
