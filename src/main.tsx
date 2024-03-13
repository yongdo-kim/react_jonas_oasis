import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import App from "./App.tsx";
import ErrorFallback from "./ui/ErrorFallback.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary
      fallbackRender={(error) => (
        <ErrorFallback
          error={error.error}
          resetErrorBoundary={() => {
            window.location.replace("/");
          }}
        />
      )}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
