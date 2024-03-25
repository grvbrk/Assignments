import { postRouter } from "../pages/Posts/Posts";
import { userRouter } from "../pages/Users/Users";
import { todoRouter } from "../pages/Todos";
import HomeLayout from "../layout/HomeLayout";
import { singlePostRouter } from "../pages/Posts/SinglePost";
import { singleUserRouter } from "../pages/Users/SingleUser";

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
        children: [
          { index: true, ...userRouter },
          { path: ":userId", ...singleUserRouter },
        ],
      },
      {
        path: "todos",
        ...todoRouter,
      },
    ],
  },
];

export default routes;
