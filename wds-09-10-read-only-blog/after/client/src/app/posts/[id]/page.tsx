import Link from "next/link";

async function Post({ params }: any) {
  const post = await fetchSinglePost(params.id);
  const author = await fetchAuthorOfPost(post.userId);
  console.log(author);
  return (
    <>
      <h1 className="page-title">{post.title}</h1>
      <span className="page-subtitle">
        By: <Link href={`/users/${author.id}`}>{author.name}</Link>
      </span>
      <div>{post.body}</div>
    </>
  );
}

async function fetchSinglePost(id: number) {
  return await fetch(`http://127.0.0.1:3001/posts/${id}`).then((res) =>
    res.json()
  );
}

async function fetchAuthorOfPost(id: number) {
  return await fetch(`http://127.0.0.1:3001/users/${id}`).then((res) =>
    res.json()
  );
}

export default Post;
