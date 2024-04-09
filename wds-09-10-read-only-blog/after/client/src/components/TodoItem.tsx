export function TodoItem({
  completed,
  title,
}: {
  completed: boolean;
  title: string;
}) {
  return <li className={completed ? "strike-through" : ""}>{title}</li>;
}
