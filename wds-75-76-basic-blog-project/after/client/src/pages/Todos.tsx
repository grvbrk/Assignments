import { useLoaderData } from "react-router-dom";
import TodoCard from "../components/Todos/TodoCard";
import { Todo, LoaderType } from "../../types";

function Todos() {
  const todosData = useLoaderData() as Todo[];
  return (
    <>
      <h1 className="page-title">Todos</h1>
      <ul>
        {todosData.map((todo) => {
          return <TodoCard key={todo.id} todo={todo} />;
        })}
      </ul>
    </>
  );
}

function loader({ request: { signal } }: LoaderType) {
  return fetch("http://localhost:3000/todos", { signal });
}

export const todoRouter = {
  loader,
  element: <Todos />,
};
