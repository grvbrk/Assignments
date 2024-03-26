import { ErrorResponse, useRouteError } from "react-router-dom";

function ErrorRoute() {
  const error: unknown = useRouteError() as Error;
  return import.meta.env.MODE !== "production" ? (
    <>
      <pre>{error.message}</pre>
      <pre>{error.stack}</pre>
    </>
  ) : (
    <h1> Something went wrong! </h1>
  );
}

export default ErrorRoute;
