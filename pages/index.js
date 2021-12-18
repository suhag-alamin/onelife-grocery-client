import { Container } from "react-bootstrap";
import styles from "../styles/Home.module.scss";
export default function Home() {
  return (
    <Container className="py-5">
      <h1 className={styles.text}>hello next</h1>
    </Container>
  );
}
