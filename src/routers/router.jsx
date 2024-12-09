import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Rsna from "../pages/Rsna";





  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: '/',
            element: <Home/>
        }
      ]
    },
    {
      path: '/book-a-demo',
      element: <Rsna/>
  }
  ]);

  export default router;