import { useLoaderData } from "react-router-dom";
import UserCard from "../../components/Users/UserCard";
import { User, LoaderType } from "../../../types";

function Users() {
  const userData = useLoaderData() as User[];
  return (
    <>
      <h1 className="page-title">Users</h1>
      <div className="card-grid">
        {userData.map((user) => {
          return <UserCard key={user.id} user={user} />;
        })}
      </div>
    </>
  );
}

function loader({ request: { signal } }: LoaderType) {
  return fetch("http://localhost:3000/users", { signal });
}

export const userRouter = {
  loader,
  element: <Users />,
};
