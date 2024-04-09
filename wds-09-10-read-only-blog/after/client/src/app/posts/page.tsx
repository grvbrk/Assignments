import PostCard from "@/components/PostCard";
import { Suspense } from "react";

async function Posts() {
  const posts = await fetchPosts();
  return (
    <>
      <h1 className="page-title">Posts</h1>
      <div className="card-grid">
        {posts.map((post: any) => (
          <PostCard key={post.id} {...post} />
        ))}
        {/* <Suspense
          fallback={
            <SkeletonList amount={6}>
              <SkeletonPostCard />
            </SkeletonList>
          }
        > */}
        {/* <Await resolve={postsPromise}> */}
        {/* {(posts) => posts.map((post) => <PostCard key={post.id} {...post} />)} */}
        {/* </Await>
        </Suspense> */}
      </div>
    </>
  );
}

async function fetchPosts() {
  return await fetch("http://127.0.0.1:3001/posts").then((res) => res.json());
}

export default Posts;
