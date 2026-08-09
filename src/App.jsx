import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Body from "./components/Body"
import { Provider } from "react-redux"
import store from "./utils/store"


function App() {
const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <Body />,
    children:[
      {
        path: "/",
        element: <></>
      },
      {
        path: "",
        element: <></>
      }
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
