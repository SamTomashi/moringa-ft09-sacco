import App from "./App";
import Home from "./components/Home";
import Login from "./components/Login";
import Transaction from "./components/Transaction";

const routes = [
   {
    path: '/',
    element: <App/>,
    errorElement: <h1> An Error coccured</h1>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/transactions/:id",
        element: <Transaction/>
      },
      {
        path: "/login",
        element: <Login/>

      }
    ]

  }
]

export default routes