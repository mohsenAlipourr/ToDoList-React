import { useState } from "react";
import { createId } from "../../../utils";
import "./style.css";

const TodoModal = ({ mode = "add", isModalOpen, setIsModalOpen, setList }) => {
  const [inputValues, setInputValues] = useState({
    title: "",
    description: "",
    status: "",
    id: "",
  });
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

  /*  const [inputValues, setInputValues] = useState({
    title: "",
    description: "",
  });
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const addTask = () => {
    setList((prev) => {
      return [...prev, inputValues];
    });

    setInputValues({
      title: "",
      description: "",
    });

    setIsModalOpen(false);
  }; */
  const addTask = () => {
    setList((prev) => {
      return [...prev, inputValues];
    });

    setInputValues({
      title: "",
      description: "",
    });

    setIsModalOpen(false);
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
          <p>NEW TASK</p>
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
        <button className="todoModalBodyButton" onClick={() => addTask()}>
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoModal;
