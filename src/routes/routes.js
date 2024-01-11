import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Posts from "../pages/Posts/Posts";

const router = createBrowserRouter
(
    [
        {
            path: '/',
            element: <App/>,
            children:
            [
                {
                    path: '/posts',
                    element: <Posts/>
                },
                {
                    path: '/registration',
                    element: <Registration/>
                },
                {
                    path: '/login',
                    element: <Login/>
                },
            ]
        }
    ]
);

export default router;