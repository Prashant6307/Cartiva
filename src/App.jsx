import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Body from "./components/Body"
import { Provider } from "react-redux"
import store from "./utils/store"
import Hero from "./components/Hero"
import WishList from "./components/WishList"
import Category from "./components/Category"


function App() {
const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <Body />,
    children:[
      {
        path: "/",
        element: <Hero/>
      },
      {
        path: "/wishlist",
        element: <WishList/>
      },
      {
        path: "/products/:category",
        element: <Category/>
      },
    ]
  }
])

  return (
    <>
      <Provider store={store} >
        
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  )
}

export default App
