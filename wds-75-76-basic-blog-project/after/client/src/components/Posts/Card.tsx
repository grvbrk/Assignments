type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function Card({ post }: { post: Post }) {
  return (
    <div className="card">
      <div className="card-header">{post.title}</div>
      <div className="card-body">
        <div className="card-preview-text">{post.body}</div>
      </div>
      <div className="card-footer">
        <a className="btn" href="post.html">
          View
        </a>
      </div>
    </div>
  );
}

export default Card;
