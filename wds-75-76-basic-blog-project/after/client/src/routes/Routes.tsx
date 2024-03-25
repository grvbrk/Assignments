import { postRouter } from "../pages/Posts/Posts";
import { userRouter } from "../pages/Users";
import { todoRouter } from "../pages/Todos";
import HomeLayout from "../layout/HomeLayout";
import { singlePostRouter } from "../pages/Posts/SinglePost";

const routes = [
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "posts",

        children: [
          {
            index: true,
            ...postRouter,
          },
          {
            path: ":postId",
            ...singlePostRouter,
          },
        ],
      },
      {
        path: "users",
        ...userRouter,
      },
      {
        path: "todos",
        ...todoRouter,
      },
    ],
  },
];

export default routes;
