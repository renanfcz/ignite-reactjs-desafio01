import "./global.css";

import styles from "./App.module.css";
import { Header } from "./components/Header";
import { PlusCircle } from "lucide-react";
import { EmptyContent } from "./components/EmptyContent";
import { ToDoItem } from "./components/ToDoItem";
import { ChangeEvent, FormEvent, useState } from "react";

interface TodoItem {
  description: string;
  done: boolean;
}

function App() {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [newTodoItem, setNewTodoItem] = useState("");
  const [totalDone, setTotalDone] = useState(0);

  function handleCreateNewTodo(event: FormEvent) {
    event.preventDefault();
    setTodoList([...todoList, { description: newTodoItem, done: false }]);
    setNewTodoItem("");
  }

  function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTodoItem(event.target.value);
  }

  function handleSelectItem(index: number, isSelected: boolean) {
    const newItems = [...todoList];
    newItems[index].done = isSelected;
    setTodoList(newItems);
    setTotalDone(todoList.filter((item) => item.done == true).length);
  }

  function handleDelete(index: number) {
    const listItems = [...todoList];
    listItems.splice(index, 1);
    setTodoList((prev) => {
      setTotalDone(listItems.filter((item) => item.done == true).length);
      return listItems;
    });
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <form className={styles.formAdd} onSubmit={handleCreateNewTodo}>
          <input
            placeholder="Adicione uma nova tarefa"
            value={newTodoItem}
            onChange={handleNewTodoChange}
          />
          <button>
            Criar
            <span>
              <PlusCircle size={15} />
            </span>
          </button>
        </form>
        <main>
          <div className={styles.headerContent}>
            <strong className={styles.totalCreated}>
              Total criadas <span>{todoList.length}</span>
            </strong>
            <strong className={styles.totalDone}>
              Concluídas{" "}
              <span>
                {totalDone === 0 ? 0 : totalDone + " de " + todoList.length}
              </span>
            </strong>
          </div>
          <div className={styles.content}>
            {todoList.length == 0 ? (
              <EmptyContent />
            ) : (
              todoList.map((todoItem, index) => {
                return (
                  <ToDoItem
                    description={todoItem.description}
                    done={todoItem.done}
                    onSelect={handleSelectItem}
                    onDelete={handleDelete}
                    index={index}
                    key={index}
                  />
                );
              })
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
