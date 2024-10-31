import { BorderOutlined, CheckSquareFilled } from "@ant-design/icons";
import { Button } from "antd";

const Icon = ({ isCompleted }: { isCompleted: boolean }) => (
  <>{isCompleted === true ? <CheckSquareFilled /> : <BorderOutlined />}</>
);

export const Todo = ({
  name,
  isCompleted,
  onClick,
}: {
  name: string;
  isCompleted: boolean;
  onClick: () => void;
}) => {
  return (
    <Button style={{ border: "none" }} onClick={onClick}>
      {name}
      <Icon isCompleted={isCompleted} />
    </Button>
  );
};
