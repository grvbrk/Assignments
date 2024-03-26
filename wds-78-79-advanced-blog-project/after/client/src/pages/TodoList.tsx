import { useLoaderData } from "react-router-dom";
import { getTodos } from "../api/todos";
import { TodoItem } from "../components/TodoItem";
import { LoaderType, Todo } from "../../types";

function TodoList() {
  const todos = useLoaderData() as Todo[];

  return (
    <>
      <h1 className="page-title">Todos</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}

function loader({ request: { signal } }: LoaderType) {
  return getTodos({ signal });
}

export const todoListRoute = {
  loader,
  element: <TodoList />,
};
