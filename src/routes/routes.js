import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";

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
                    element: <h1>Posts</h1>
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