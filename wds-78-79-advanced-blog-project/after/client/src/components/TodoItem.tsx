import { Todo } from "../../types";

export function TodoItem({ completed, title }: Todo) {
  return <li className={completed ? "strike-through" : undefined}>{title}</li>;
}
