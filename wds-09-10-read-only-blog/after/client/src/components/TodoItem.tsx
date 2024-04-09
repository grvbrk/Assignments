function TodoItem({ completed, title }: any) {
  return <li className={completed ? "strike-through" : undefined}>{title}</li>;
}

export default TodoItem;
