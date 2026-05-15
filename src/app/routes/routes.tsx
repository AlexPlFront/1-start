import { createBrowserRouter } from "react-router";
import { Main } from "../../pages/main";
import { Layout } from "../layout";


export const router=createBrowserRouter([
  {
    path:'/',
    Component:Layout,
    children:[
        {index:true,Component:Main}
    ]
  }
])