import Link from "next/link";
import type { User } from "@/types";
import { Suspense } from "react";
import { SkeletonList, Skeleton, SkeletonButton } from "@/components/Skeleton";
import { wait } from "@/utils/wait";

async function Users() {
  return (
    <>
      <h1 className="page-title">Users</h1>
      <div className="card-grid">
        <Suspense
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
          <ShowUserList />
        </Suspense>
      </div>
    </>
  );
}

async function ShowUserList() {
  const users = (await fetchUsers()) as User[];
  return users.map((user) => (
    <div key={user.id} className="card">
      <div className="card-header">{user.name}</div>
      <div className="card-body">
        <div>{user.company.name}</div>
        <div>{user.website}</div>
        <div>{user.email}</div>
      </div>
      <div className="card-footer">
        <Link className="btn" href={`users/${user.id.toString()}`}>
          View
        </Link>
      </div>
    </div>
  ));
}

async function fetchUsers() {
  // await wait(2);
  return await fetch(`${process.env.API_URL}/users`).then((res) => res.json());
}

export default Users;
