import styles from "./Header.module.css";
import rocket from "../assets/rocket.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocket} alt="Logo Rocket" />
      <strong>
        <span className={styles.to}>to</span>
        <span className={styles.do}>do</span>
      </strong>
    </header>
  );
}
