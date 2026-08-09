import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import CategoryNav from "./CategoryNav"

function Body() {
  return (
    <div>
      <Navbar />
      <CategoryNav />
      <Outlet />
    </div>
  )
}

export default Body
