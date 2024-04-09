import Link from "next/link";

function PostCard({ id, title, body }: any) {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <div className="card-preview-text">{body}</div>
      </div>
      <div className="card-footer">
        <Link className="btn" href={`/posts/${id}`}>
          View
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
