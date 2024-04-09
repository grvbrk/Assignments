import Skeleton from "@/components/Skeleton";
import TodoItem from "@/components/TodoItem";
import { Suspense } from "react";

async function Todos() {
  const todos = await fetchTodos();
  return (
    <>
      <h1 className="page-title">Todos</h1>
      <ul>
        {todos.map((todo: any) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
        {/* <Suspense
          fallback={
            <SkeletonList amount={10}>
              <li>
                <Skeleton short />
              </li>
            </SkeletonList>
          }
        >
          <Await resolve={todosPromise}>
            {(todos) =>
              todos.map((todo) => <TodoItem key={todo.id} {...todo} />)
            }
          </Await>
        </Suspense> */}
      </ul>
    </>
  );
}

async function fetchTodos() {
  return await fetch("http://127.0.0.1:3001/todos").then((res) => res.json());
}

export default Todos;
