import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import { About } from "../Pages/About";
import CreateJob from "../Pages/CreateJob";
import Myjobs from "../Pages/Myjobs";
import UpdateJob from "../Pages/UpdateJob";
import Login from "../componentes/Login";
import SignUp from "../componentes/SignUp";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {path: "/", element:<Home/>},
        {
         path:"/post-job",
         element:<CreateJob/>
        },
        {
          path:"/my-job",
          element:<Myjobs/>
        },
        {
          path: "edit-job/:id",
          element:<UpdateJob/>,
          loader: ({params}) => fetch(`http://localhost:3000/all-jobs/${params.id}`)
        }
        
      ],
    },
    {
      path: "/login",
      element:<Login/>
    },
    {
      path:"/register",
      element:<SignUp/>
    },
 
  
  ]);

  export default router


