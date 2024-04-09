import Link from "next/link";
import type { Post, User, Comment } from "../../../types";
import { Suspense } from "react";
import { Skeleton, SkeletonList } from "@/components/Skeleton";
// import { wait } from "@/utils/wait";

async function Post({ params: { postId } }: { params: { postId: string } }) {
  return (
    <>
      <Suspense
        fallback={
          <>
            <h1 className="page-title">
              <Skeleton inline short />
            </h1>
            <span className="page-subtitle">
              By: <Skeleton short inline />
            </span>
            <div>
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          </>
        }
      >
        <ShowPost postId={postId} />
      </Suspense>

      <h3 className="mt-4 mb-2">Comments</h3>
      <Suspense
        fallback={
          <SkeletonList amount={5}>
            <div className="card">
              <div className="card-body">
                <div className="text-sm mb-1">
                  <Skeleton short />
                </div>
                <Skeleton />
                <Skeleton />
              </div>
            </div>
          </SkeletonList>
        }
      >
        <ShowComments postId={postId} />
      </Suspense>
    </>
  );
}

async function ShowPost({ postId }: { postId: string }) {
  const post = (await fetchPost(postId)) as Post;
  return (
    <>
      <h1 className="page-title">{post.title}</h1>
      <span className="page-subtitle">
        By:
        <Suspense fallback={<Skeleton short inline />}>
          <ShowUser userId={post.id} />
        </Suspense>
      </span>
      <div>{post.body}</div>
    </>
  );
}

async function ShowUser({ userId }: { userId: number }) {
  const user = (await fetchUser(userId)) as User;
  return <Link href={`/users/${user.id}`}>{user.name}</Link>;
}

async function ShowComments({ postId }: { postId: string }) {
  const comments = (await fetchComments(postId)) as Comment[];
  return (
    <div className="card-stack">
      {comments.map((comment) => (
        <div key={comment.id} className="card">
          <div className="card-body">
            <div className="text-sm mb-1">{comment.email}</div>
            {comment.body}
          </div>
        </div>
      ))}
    </div>
  );
}

async function fetchPost(postId: string) {
  return await fetch(`${process.env.API_URL}/posts/${postId}`).then((res) =>
    res.json()
  );
}

async function fetchUser(userId: number) {
  return await fetch(`${process.env.API_URL}/users/${userId}`).then((res) =>
    res.json()
  );
}

async function fetchComments(postId: string) {
  return await fetch(`${process.env.API_URL}/posts/${postId}/comments`).then(
    (res) => res.json()
  );
}

export default Post;
