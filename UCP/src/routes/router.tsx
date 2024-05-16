import { createBrowserRouter } from "react-router-dom";
import Start from "./Start";
import MakeProfile from "./MakeProfile";
import Connect from "./Connect";
import Find from "./Find";
import Root from "./Root";

const Router = createBrowserRouter([{
    path: "/",
    element: <Root />,
    children: [
        {
            path: "/Start",
            element: <Start />,
            children: [
                {
                    path: "/Starts/:StartId",
                    element: <Start />,

                },
            ],
        },
        { path: "/", element: <Start /> },
        { path: "connect", element: <Connect /> },
        { path: "makeProfile", element: <MakeProfile /> },
        { path: "find", element: <Find /> }

    ],

},
])

export default Router