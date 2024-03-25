import { Link } from "react-router-dom";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function PostCard({ post }: { post: Post }) {
  return (
    <div className="card">
      <div className="card-header">{post.title}</div>
      <div className="card-body">
        <div className="card-preview-text">{post.body}</div>
      </div>
      <div className="card-footer">
        <Link className="btn" to={post.id.toString()}>
          View
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
