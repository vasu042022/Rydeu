import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/website/Home"
import Help from "./pages/website/help"
import Layout from "./pages/website/Layout"
import Booking from "./pages/website/Booking"

export default function App() {
  const routes = createBrowserRouter(
    [
      {
        path: '',
        element: <Layout />,
        children: [

          {
            path: '',
            element: < Home />
          },
          {
            path: '/help',
            element: < Help />
          },
          {
            path: '/booking',
            element: < Booking />
          }
        ]
      }

    ]
  )

  return (
    <RouterProvider router={routes} />
  )
}