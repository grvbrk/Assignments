import Skeleton from "@/components/Skeleton";
import Link from "next/link";
import { Suspense } from "react";

async function Users() {
  const users = await fetchUsers();

  return (
    <>
      <h1 className="page-title">Users</h1>
      <div className="card-grid">
        {users.map((user: any) => (
          <div key={user.id} className="card">
            <div className="card-header">{user.name}</div>
            <div className="card-body">
              <div>{user.company.name}</div>
              <div>{user.website}</div>
              <div>{user.email}</div>
            </div>
            <div className="card-footer">
              <Link className="btn" href={user.id.toString()}>
                View
              </Link>
            </div>
          </div>
        ))}
        {/* <Suspense
          fallback={
            <SkeletonList amount={6}>
              <div className="card">
                <div className="card-header">
                  <Skeleton short />
                </div>
                <div className="card-body">
                  <Skeleton short />
                  <Skeleton short />
                  <Skeleton short />
                </div>
                <div className="card-footer">
                  <SkeletonButton />
                </div>
              </div>
            </SkeletonList>
          }
        >
          <Await resolve={usersPromise}>
            {(users) =>
              users.map((user) => (
                <div key={user.id} className="card">
                  <div className="card-header">{user.name}</div>
                  <div className="card-body">
                    <div>{user.company.name}</div>
                    <div>{user.website}</div>
                    <div>{user.email}</div>
                  </div>
                  <div className="card-footer">
                    <Link className="btn" to={user.id.toString()}>
                      View
                    </Link>
                  </div>
                </div>
              ))
            }
          </Await>
        </Suspense> */}
      </div>
    </>
  );
}

async function fetchUsers() {
  return await fetch("http://127.0.0.1:3001/users").then((res) => res.json());
}

export default Users;
