import { Link } from "react-router-dom";


function Footer() {
    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">

            <aside>
                <h2 className="text-2xl font-bold text-primary">
                    Cartiva
                </h2>
                <p>
                    Your modern shopping destination.
                    <br />
                    © 2026 Cartiva. All rights reserved.
                </p>
            </aside>

            <nav>
                <h6 className="footer-title">
                    Shop
                </h6>
                <p className="link link-hover">
                   <Link to={"/"}> Products</Link>
                </p>
                <p className="link link-hover">
                    <Link to={"products/mens-shirts"}>Categories</Link>
                </p>
                <p className="link link-hover">
                    <Link to={"wishlist"}>Wishlist</Link>
                </p>
                <p className="link link-hover">
                    <Link to={"cart"}>Cart</Link>
                </p>
            </nav>

            <nav>
                <h6 className="footer-title">
                    Company
                </h6>
                <p className="link link-hover">
                    About
                </p>
                <p className="link link-hover">
                    Contact
                </p>
                <p className="link link-hover">
                    Privacy Policy
                </p>
                <p className="link link-hover">
                    Terms
                </p>
            </nav>

            <nav>
                <h6 className="footer-title">
                    Follow Us
                </h6>
                <div className="grid grid-flow-col gap-4">
                    <p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current"
                        >
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775..." />
                        </svg>
                    </p>

                    <p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current"
                        >
                            <path d="M12 2.163c3.204 0 3.584..." />
                        </svg>
                    </p>
                </div>
            </nav>

        </footer>
    );
}

export default Footer;