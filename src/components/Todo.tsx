import { BorderOutlined, CheckSquareFilled } from "@ant-design/icons";
import { Button } from "antd";

const Icon = ({
  isCompleted,
  handleToggle,
  todoId,
}: {
  isCompleted: boolean;
  todoId: string;
  handleToggle: (todoId: string) => void;
}) => (
  <div onClick={() => handleToggle(todoId)}>
    {isCompleted === true ? <CheckSquareFilled /> : <BorderOutlined />}
  </div>
);

export const Todo = ({
  name,
  todoId,
  isCompleted,
  handleToggle,
}: {
  name: string;
  isCompleted: boolean;
  todoId: string;
  handleToggle: (todoId: string) => void;
}) => {
  return (
    <Button style={{ border: "none" }}>
      {name}
      <Icon
        isCompleted={isCompleted}
        handleToggle={handleToggle}
        todoId={todoId}
      />
    </Button>
  );
};
