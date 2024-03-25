import { Link } from "react-router-dom";
import { User } from "../../../types";

function UserCard({ user }: { user: User }) {
  return (
    <div className="card">
      <div className="card-header">{user.name}</div>
      <div className="card-body">
        <div>{user.company.name}</div>
        <div>{user.website}</div>
        <div>{user.email}</div>
      </div>
      <div className="card-footer">
        <Link className="btn" to={user.id.toString()}>
          View
        </Link>
      </div>
    </div>
  );
}

export default UserCard;
