import { useState } from "react";
import TodoContent from "../todoContent";
import TodoModal from "../todoModal";
import "./style.css";

const TodoBody = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="todoBody">
      <div className="todoBodyTitle">
        <p>TODO</p>
      </div>

      <TodoContent isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

      <div className="todoBodyFooter">
        <button
          className="todoBodyFooterButton"
          onClick={() => setIsModalOpen(true)}
        >
          +
        </button>
      </div>

      <TodoModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default TodoBody;
