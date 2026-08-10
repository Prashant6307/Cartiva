import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import CategoryNav from "./CategoryNav"
import Footer from "./Footer"

function Body() {
  return (
    <div>
      <Navbar />
      <CategoryNav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Body
