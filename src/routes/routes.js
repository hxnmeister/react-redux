import { createBrowserRouter } from "react-router-dom";
import App from "../App";

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
                    element: <h1>Registration</h1>
                },
                {
                    path: '/login',
                    element: <h1>Login</h1>
                },
            ]
        }
    ]
);

export default router;