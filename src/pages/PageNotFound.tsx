import { useMoveBack } from "../hooks/useMoveBack";
import Box from "../ui/Box";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <main className={styles.main}>
      <Box>
        <Heading style="h1">
          The page you are looking for could not be found 😢
        </Heading>
        <Button size="small" variations="primary" onClick={moveBack}>
          &larr; Go back
        </Button>
      </Box>
    </main>
  );
}

export default PageNotFound;
