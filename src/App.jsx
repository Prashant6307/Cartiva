import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Body from "./components/Body"
import { Provider } from "react-redux"
import Hero from "./components/Hero"
import WishList from "./components/WishList"
import Category from "./components/Category"
import Cart from "./components/Cart"
import store from "./utils/store"
import Profile from "./components/Profile"
import ProductsDetails from "./components/ProductsDetails"
import SearchResults from "./components/SearchResults"
import Login from "./components/Login"
import userContext from "./utils/userContext"
import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./utils/firebase"


function App() {
  const [user, setUser] = useState(null)

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Hero />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/wishlist",
          element: <WishList />
        },
        {
          path: "/products/:category",
          element: <Category />
        },
        {
          path: "/product/:id",
          element: <ProductsDetails />
        },
        {
          path: "/search/:query",
          element: <SearchResults />
        }
      ]
    },
    {
      path: "profile",
      element: <Profile />
    },
    {
      path: "login",
      element: <Login />
    }

  ])

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }

    })


    return () => unsubscribe()

  }, []);
  return (
    <>
      <userContext.Provider value={{user, setUser}}>
        <Provider store={store} >

          <RouterProvider router={appRouter} />

        </Provider>
      </userContext.Provider>
    </>
  )
}

export default App
