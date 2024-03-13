import Box from "./Box";
import Button from "./Button";
import styles from "./ErrorFallback.module.css";
import Heading from "./Heading";

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  return (
    <div className={styles.styledErrorFallback}>
      <Box>
        <Heading style='h1'>Something went wrong</Heading>
        <p>{error.message}</p>
        <Button onClick={resetErrorBoundary}>Try Again</Button>
      </Box>
    </div>
  );
}
