import { useState } from "react";
import { createId } from "../../../utils";
import MenuTodo from "./menu";
import "./style.css";
import TodoModal from "../todoModal";

const TodoContent = ({ isModalOpen, setIsModalOpen }) => {
  const [inputValues, setInputValues] = useState({
    title: "",
    description: "",
    status: "",
    id: "",
  });
  const [list, setList] = useState([]);
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

  const doneTask = (id) => {
    const newState = list.map((obj) => {
      if (obj.id === id && obj.status === "active") {
        return { ...obj, status: "inactive" };
      }
      if (obj.id === id && obj.status === "inactive") {
        return { ...obj, status: "active" };
      }
      return obj;
    });

    setList(newState);
  };

  const deleteListItem = (id) => {
    const index = list.findIndex((list) => list.id === id);
    list.splice(index, 1);
    const deleteList = list.map((item) => {
      return item;
    });
    setList(deleteList);
  };

  return (
    <div className="todoContent">
      {/*modal*/}
      {/* <div className={`todoModal ${isModalOpen ? "todoModalOpen" : ""}`}>
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
      </div> */}
      <TodoModal setList={setList} list={list} doneTask={doneTask} />
      {/*modal*/}
      <ul>
        {list.map((item, index) => (
          <li key={index} className="list">
            <div>
              <span className={item.status === "inactive" ? "buttonDone" : ""}>
                {item.title}
              </span>
            </div>
            <div className="contentButton">
              <button
                className="button"
                onClick={list.length ? () => doneTask(item.id) : ""}
              >
                {item.status === "inactive" ? (
                  <img src="/icone/tickicon.png"></img>
                ) : (
                  ""
                )}
              </button>

              <MenuTodo
                deleteListItem={deleteListItem}
                item={item}
                setIsModalOpen={setIsModalOpen}
              />
              {/*menu*/}
              {/* <div className={`menu ${menu ? "active" : ""}`}>
                <div className="menuContent">
                  <div>
                    <samp
                      className="menuContentClose"
                      onClick={() => setMenu(false)}
                    >
                      ×
                    </samp>
                  </div>
                  <div className="menuContentImg">
                    <img src="/icone/editTask.png"></img>
                    <img src="/icone/deleteTask.png"></img>
                  </div>
                </div>
              </div> */}

              {/*menu*/}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoContent;
