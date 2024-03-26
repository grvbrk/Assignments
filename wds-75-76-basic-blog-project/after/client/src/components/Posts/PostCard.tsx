import { Link, useNavigation } from "react-router-dom";
import { Post } from "../../../types";
import Skeleton from "react-loading-skeleton";

function PostCard({ post }: { post: Post }) {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return isLoading ? (
    <Skeleton height={100} count={5} className="skeleton-load" />
  ) : (
    <div className="card">
      <div className="card-header">{post.title}</div>
      <div className="card-body">
        <div className="card-preview-text">{post.body}</div>
      </div>
      <div className="card-footer">
        <Link className="btn" to={`/posts/${post.id}`}>
          View
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
