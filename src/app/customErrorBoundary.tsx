// error boundary
import { useRouteError } from "react-router-dom";
import * as Sentry from "@sentry/react";
import React from "react";

export function YourCustomRootErrorBoundary() {
  const error = useRouteError() as Error;

  React.useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <div>
      <h1>Ouch!</h1>
    </div>
  );
}