import Home from "~/pages/Home"
import Following from "~/pages/Following"
import Upload from "~/pages/Upload"
import {HeaderOnly} from "~/Layout"
const publicRoutes = [
    {path: "/", element: Home},
    {path:"/followings", element: Following},
    {path:"/upload", element: Upload,layout: HeaderOnly},
]

const privateRoutes = []

export {publicRoutes, privateRoutes}

//Nếu mà không đăng nhập thì dùng các routes trong publicRoutes
//Còn nếu mà muốn vào các routes trong privateRoutes thì mình chuyển vào routes LOGIN