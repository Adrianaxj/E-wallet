import './App.scss'

import AddCard from './View/AddCard'
import Home from './View/Home'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

function App({store}) {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home store={store} />,
    },
    {
      path: "/AddCard",
      element: <AddCard store={store} />,
    },
  ]);

  return (
      <div className="App">
        <RouterProvider router={router} />
      </div>
  )
}

export default App