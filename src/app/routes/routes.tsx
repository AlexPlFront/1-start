import { createBrowserRouter } from "react-router";
import { ROUTES } from "@/shared/routes";
import { Layout } from "../layout";
import { Main } from "@/pages/main";



export const router=createBrowserRouter([
  {
    path:ROUTES.main,
    Component:Layout,
    children:[
        {index:true,Component:Main}
    ]
  }
])