import { SkeletonList, Skeleton } from "@/components/Skeleton";
import { TodoItem } from "@/components/TodoItem";
import { Todo } from "@/types";
import { wait } from "@/utils/wait";
import { Suspense } from "react";

function Todos() {
  return (
    <>
      <h1 className="page-title">Todos</h1>
      <ul>
        <Suspense
          fallback={
            <SkeletonList amount={6}>
              <li>
                <Skeleton short />
              </li>
            </SkeletonList>
          }
        >
          <ShowTodoList />
        </Suspense>
      </ul>
    </>
  );
}

async function ShowTodoList() {
  const todos = (await fetchTodos()) as Todo[];
  return todos.map((todo) => <TodoItem key={todo.id} {...todo} />);
}

async function fetchTodos() {
  // await wait(2);
  return await fetch(`${process.env.API_URL}/todos`).then((res) => res.json());
}

export default Todos;
