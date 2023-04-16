import { useEffect, useState } from "react";
import { createId } from "../../../utils";
import "./style.css";

const TodoModal = ({ mode = "add", isModalOpen, setIsModalOpen, onChange }) => {
  const [inputValues, setInputValues] = useState({
    title: "",
    description: "",
    status: "",
    id: "",
  });

  /* useEffect(() => {
    if (mode === "edit") {
       setInputValues(list); 
    }
  }, [isModalOpen]); */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputValues((prev) => {
      return {
        ...prev,
        [name]: value,
        status: "active",
        id: createId(),
      };
    });
  };

  const handelActionTask = () => {
    if (mode === "add") {
      onChange({ inputValues, setInputValues });
      return;
    }
  };

  const editTask = () => {
    /* if (mode === "edit") {
      setInputValues(list);
    } */
  };
  return (
    <div className={`todoModal ${isModalOpen ? "todoModalOpen" : ""}`}>
      <div className={`${isModalOpen ? "todoModalBody" : ""}`}>
        <div>
          <samp
            className="todoModalClose"
            onClick={() => setIsModalOpen(false)}
          >
            ×
          </samp>
          <p className="todoModalText">
            {mode === "add" ? "NEW TASK" : "Edit task"}
          </p>
        </div>
        <div className="todoModalBodyContent">
          <label className="todoModalBodyContentText">Title</label>
          <input
            className="todoModalBodyContentInput"
            type="text"
            name="title"
            value={inputValues.title}
            onChange={handleChange}
          ></input>

          <label className="todoModalBodyContentText">Description</label>
          <input
            className="todoModalBodyContentInputDescription"
            type="text"
            name="description"
            value={inputValues.description}
            onChange={handleChange}
          ></input>
        </div>
        <button
          className="todoModalBodyButton"
          onClick={mode === "add" ? handelActionTask : editTask}
        >
          {mode === "add" ? " Add" : "Edit"}
        </button>
      </div>
      <div
        className="modalBackground"
        onClick={() => setIsModalOpen(false)}
      ></div>
    </div>
  );
};

export default TodoModal;
