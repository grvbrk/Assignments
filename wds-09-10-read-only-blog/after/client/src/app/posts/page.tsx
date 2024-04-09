import { PostCard, SkeletonPostCard } from "@/components/PostCard";
import { Suspense } from "react";
import type { Post } from "@/types";
import { SkeletonList } from "@/components/Skeleton";

async function Posts() {
  return (
    <>
      <h1 className="page-title">Posts</h1>
      <div className="card-grid">
        <Suspense
          fallback={
            <SkeletonList amount={6}>
              <SkeletonPostCard />
            </SkeletonList>
          }
        >
          <ShowPostList />
        </Suspense>
      </div>
    </>
  );
}

async function ShowPostList() {
  const posts = (await fetchPosts()) as Post[];
  return posts.map((post) => <PostCard key={post.id} {...post} />);
}

async function fetchPosts() {
  return await fetch("http://127.0.0.1:3001/posts").then((res) => res.json());
}

export default Posts;
