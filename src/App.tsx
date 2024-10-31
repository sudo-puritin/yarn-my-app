import React, { ChangeEvent } from "react";
import { Todo } from "./components/Todo";

import { Button } from "antd";
import { Input } from "antd";

type TodoField = { id: string; title: string; isCompleted: boolean };

function App() {
  const [todoList, setTodoList] = React.useState<TodoField[]>([]);
  const [newTodoTask, setNewTodoTask] = React.useState("");

  const handleOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoTask(e.target.value);
  };

  const handleSubmit = () => {
    const newTodoList: TodoField = {
      id: `${Math.random()}`,
      title: newTodoTask,
      isCompleted: false,
    };

    setTodoList([newTodoList, ...todoList]);
    setNewTodoTask("");
  };

  const handleToggle = (todoId: string) => {
    setTodoList((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
    });

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          gap: "10px",
        }}
      >
        <h1>This is Todo App</h1>
        <div style={{ display: "flex", flexWrap: "nowrap", gap: "10px" }}>
          <Input onChange={handleOnChangeInput} value={newTodoTask} />
          <Button variant="solid" onClick={handleSubmit}>
            Add
          </Button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {todoList.map((todo) => (
            <Todo
              key={todo.id}
              todoId={todo.id}
              name={todo.title}
              isCompleted={todo.isCompleted}
              handleToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    );
  };
}

export default App;
