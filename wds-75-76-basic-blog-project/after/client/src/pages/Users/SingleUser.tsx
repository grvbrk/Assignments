import { useLoaderData } from "react-router-dom";
import { LoaderType, Post, Todo, User } from "../../../types";
import PostCard from "../../components/Posts/PostCard";
import TodoCard from "../../components/Todos/TodoCard";

function SingleUser() {
  const { user, userPosts, userTodos } = useLoaderData() as {
    user: User;
    userPosts: Post[];
    userTodos: Todo[];
  };
  console.log(userTodos);
  return (
    <div className="container">
      <h1 className="page-title">{user.name}</h1>
      <div className="page-subtitle">{user.email}</div>
      <div>
        <b>Company:</b> {user.company.name}
      </div>
      <div>
        <b>Website:</b> {user.website}
      </div>
      <div>
        <b>Address:</b>{" "}
        {`${user.address.street} ${user.address.suite}, ${user.address.city} ${user.address.zipcode}`}
      </div>
      <h3 className="mt-4 mb-2">Posts</h3>
      <div className="card-grid">
        {userPosts.map((post) => {
          return <PostCard key={post.id} post={post} />;
        })}
      </div>

      <h3 className="mt-4 mb-2">Todos</h3>
      <ul>
        {userTodos.map((todo) => {
          return <TodoCard key={todo.id} todo={todo} />;
        })}
      </ul>
    </div>
  );
}

async function loader({ params, request: { signal } }: LoaderType) {
  const user = await fetch(`http://localhost:3000/users/${params?.userId}`, {
    signal,
  }).then((res) => res.json());

  const userPosts = fetch(
    `http://localhost:3000/posts?userId=${params?.userId}`,
    {
      signal,
    }
  ).then((res) => res.json());

  const userTodos = fetch(
    `http://localhost:3000/todos?userId=${params?.userId}`,
    {
      signal,
    }
  ).then((res) => res.json());

  return { user, userPosts: await userPosts, userTodos: await userTodos };
}

export const singleUserRouter = {
  loader,
  element: <SingleUser />,
};
