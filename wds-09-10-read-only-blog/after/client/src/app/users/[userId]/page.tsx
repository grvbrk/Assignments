import { SkeletonPostCard, PostCard } from "@/components/PostCard";
import { SkeletonList, Skeleton } from "@/components/Skeleton";
import { TodoItem } from "@/components/TodoItem";
import type { Post, Todo, User } from "@/types";
import { wait } from "@/utils/wait";
import React, { Suspense } from "react";

function User({ params: { userId } }: { params: { userId: string } }) {
  return (
    <>
      <Suspense
        fallback={
          <>
            <h1 className="page-title">
              <Skeleton short inline />
            </h1>
            <div className="page-subtitle">
              <Skeleton short inline />
            </div>
            <div>
              <b>Company:</b> <Skeleton short inline />
            </div>
            <div>
              <b>Website:</b> <Skeleton short inline />
            </div>
            <div>
              <b>Address:</b> <Skeleton short inline />
            </div>
          </>
        }
      >
        <ShowUserInfo userId={userId} />
      </Suspense>
      <h3 className="mt-4 mb-2">Posts</h3>
      <div className="card-grid">
        <Suspense
          fallback={
            <SkeletonList amount={3}>
              <SkeletonPostCard />
            </SkeletonList>
          }
        >
          <ShowUserPosts userId={userId} />
        </Suspense>
      </div>

      <h3 className="mt-4 mb-2">Todos</h3>
      <ul>
        <Suspense
          fallback={
            <SkeletonList amount={5}>
              <li>
                <Skeleton short />
              </li>
            </SkeletonList>
          }
        >
          <ShowUserTodos userId={userId} />
        </Suspense>
      </ul>
    </>
  );
}

async function ShowUserInfo({ userId }: { userId: string }) {
  const user = (await fetchUser(userId)) as User;
  return (
    <>
      <h1 className="page-title">{user.name}</h1>
      <div className="page-subtitle">{user.email}</div>
      <div>
        <b>Company:</b> {user.company.name}
      </div>
      <div>
        <b>Website:</b> {user.website}
      </div>
      <div>
        <b>Address:</b>
        {`${user.address.street} ${user.address.suite}
      ${user.address.city} ${user.address.zipcode}`}
      </div>
    </>
  );
}

async function ShowUserPosts({ userId }: { userId: string }) {
  const posts = (await fetchUserPost(userId)) as Post[];
  return posts.map((post) => <PostCard key={post.id} {...post} />);
}

async function ShowUserTodos({ userId }: { userId: string }) {
  const todos = (await fetchUserTodos(userId)) as Todo[];
  return todos.map((todo) => <TodoItem key={todo.id} {...todo} />);
}

async function fetchUser(userId: string) {
  return await fetch(`${process.env.API_URL}/users/${userId}`).then((res) =>
    res.json()
  );
}

async function fetchUserPost(userId: string) {
  return await fetch(`${process.env.API_URL}/posts?userId=${userId}`).then(
    (res) => res.json()
  );
}

async function fetchUserTodos(userId: string) {
  return await fetch(`${process.env.API_URL}/todos?userId=${userId}`).then(
    (res) => res.json()
  );
}

export default User;
