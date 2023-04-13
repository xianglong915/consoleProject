import React,{lazy} from "react"
import Home from "../views/Home"
const Page1 = lazy(()=> import("../views/Page1"))
const Page2 = lazy(()=> import("../views/Page2"))
const User = lazy(()=> import("../views/User"))
import {Navigate} from 'react-router-dom'

const withLoading = (comp:JSX.Element) => (
    <React.Suspense fallback={<div>loading</div>}>
      {comp}
    </React.Suspense>
)
const routes = [
{
    path:"/",
    element:<Navigate to="/page1"/>
},
{

    path:"/",
    element:<Home/>,
    children:[
        {
            path:"/page1",
            element: withLoading(<Page1/>)
        },
        {

            path:"/page2",
            element:withLoading(<Page2/>)
        }
    ]
}
// {
//     path:"/home",
//     element:<Home />
// },
// {
//     path:"/about",
//     element:withLoading(<About/>)
// },
// {
//     path:"/user",
//     element:withLoading(<User/>)
// }



]

export default routes