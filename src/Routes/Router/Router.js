import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import Destination from "../../pages/Destination/Destination";
import Register from "../../authentication/Register/Register";
import Login from "../../authentication/Login/Login";
import Profile from "../../pages/Profile/Profile";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Blog from "../../pages/Blog/Blog";
import Contact from "../../pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://ride-mama-server.vercel.app/service"),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: (
          <PrivateRouter>
            <Contact></Contact>
          </PrivateRouter>
        ),
      },
      {
        path: "/destination/:id",
        element: (
          <PrivateRouter>
            <Destination></Destination>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://ride-mama-server.vercel.app/serviceDestination/${params.id}`
          ),
      },
      { path: "/register", element: <Register></Register> },
      { path: "/login", element: <Login></Login> },
      {
        path: "/profile",
        element: (
          <PrivateRouter>
            <Profile></Profile>
          </PrivateRouter>
        ),
      },
    ],
  },
]);
