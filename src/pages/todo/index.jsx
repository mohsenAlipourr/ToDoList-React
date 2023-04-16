import { useState } from "react";
import { TodoModal, TodoList } from "../../components/todo";
import "./style.css";

const Todo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [list, setList] = useState([]);

  const addNewTask = ({ inputValues, setInputValues }) => {
    setList((prev) => [...prev, inputValues]);

    setIsModalOpen(false);
    setInputValues({
      title: "",
      description: "",
      status: "",
      id: "",
    });
  };

  return (
    <div className="todoContainer">
      <div className="todoBody">
        <div className="todoBodyTitle">
          <p>TODO</p>
        </div>

        <TodoList list={list} setList={setList} />

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
      </div>
    </div>
  );
};

export default Todo;
