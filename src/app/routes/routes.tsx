import { createBrowserRouter } from "react-router";
import { Main } from "../../pages/main";
import { Layout } from "../layout";
import { ROUTES } from "../../shared";


export const router=createBrowserRouter([
  {
    path:ROUTES.main,
    Component:Layout,
    children:[
        {index:true,Component:Main}
    ]
  }
])