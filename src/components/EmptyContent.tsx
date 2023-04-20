import clipboard from "../assets/Clipboard.svg";
import styles from "./EmptyContent.module.css";

export function EmptyContent() {
  return (
    <div className={styles.content}>
      <img src={clipboard} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
