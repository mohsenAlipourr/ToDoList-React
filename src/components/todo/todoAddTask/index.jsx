import { useState } from "react";
import { createId } from "../../../utils";
import TodoModal from "../todoModal";
import "./style.css";

const TodoAddTask = ({ setList }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addNewTask = ({ inputValues, setInputValues }) => {
    setList((prev) => [
      ...prev,
      { ...inputValues, status: "active", id: createId() },
    ]);

    setIsModalOpen(false);

    setInputValues({
      title: "",
      description: "",
    });
  };

  return (
    <>
      <div className="todoBodyFooter">
        <button
          className="todoBodyFooterButton"
          onClick={() => setIsModalOpen(true)}
        >
          +
        </button>
      </div>

      <TodoModal
        mode="add"
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        onChange={addNewTask}
      />
    </>
  );
};

export default TodoAddTask;
