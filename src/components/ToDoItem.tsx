import { Trash2 } from 'lucide-react';
import { ChangeEvent } from 'react';

import styles from './ToDoItem.module.css';

interface TodoItemProps {
  index: number;
  description: string;
  done: boolean;
  onSelect: (index: number, done: boolean) => void;
  onDelete: (index: number) => void;
}

export function ToDoItem({
  description,
  done,
  onSelect,
  onDelete,
  index,
}: TodoItemProps) {
  function handleSelectItem(event: ChangeEvent<HTMLInputElement>) {
    onSelect(index, event.target.checked);
  }

  function handleDelete() {
    onDelete(index);
  }

  return (
    <div className={styles.content}>
      <label className={styles.container}>
        <input type="checkbox" checked={done} onChange={handleSelectItem} />
        <span className={styles.checkmark}></span>
      </label>
      {done ? (
        <p className={styles.taskDone}>{description}</p>
      ) : (
        <p>{description}</p>
      )}
      <button onClick={handleDelete}>
        <Trash2 size={18} />
      </button>
    </div>
  );
}
