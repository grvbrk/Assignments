import { Todo } from "../../../types";

function TodoCard({ todo }: { todo: Todo }) {
  return (
    <li className={`${todo.completed ? "strike-through" : ""}`}>
      {todo.title}
    </li>
  );
}

export default TodoCard;
