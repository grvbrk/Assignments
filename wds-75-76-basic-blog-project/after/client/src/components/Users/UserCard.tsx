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
        <a className="btn" href="user.html">
          View
        </a>
      </div>
    </div>
  );
}

export default UserCard;
