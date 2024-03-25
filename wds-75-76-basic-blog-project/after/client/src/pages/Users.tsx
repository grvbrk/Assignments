import { useLoaderData } from "react-router-dom";
import UserCard from "../components/Users/UserCard";
import { User, LoaderType } from "../../types";

function Users() {
  const userData = useLoaderData() as User[];
  return (
    <div className="container">
      <h1 className="page-title">Todos</h1>
      <ul>
        {userData.map((user) => {
          return <UserCard key={user.id} user={user} />;
        })}
      </ul>
    </div>
  );
}

function loader({ request: { signal } }: LoaderType) {
  return fetch("http://localhost:3000/users", { signal });
}

export const userRouter = {
  loader,
  element: <Users />,
};
