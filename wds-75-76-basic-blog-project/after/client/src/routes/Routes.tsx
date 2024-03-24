import Posts from "../pages/Posts";
import Users from "../pages/Users";
import Todos from "../pages/Todos";
import HomeLayout from "../layout/HomeLayout";

type LoaderType = {
  request: {
    signal: AbortSignal;
  };
};

const routes = [
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/posts",
        element: <Posts />,
        loader: ({ request: { signal } }: LoaderType) => {
          return fetch("http://localhost:3000/posts", { signal });
        },
      },
      { path: "/users", element: <Users /> },
      { path: "/todos", element: <Todos /> },
    ],
  },
];

export default routes;
