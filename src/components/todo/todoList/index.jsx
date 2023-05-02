import { useState } from "react";
import TodoModal from "../todoModal";
import MenuItem from "./menuItem";
import "./style.css";
import { cloneList } from "../../../utils";

const TodoList = ({ list, setList }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  const doneTask = (id) => {
    const index = list.findIndex((item) => item.id === id);

    const doneTaskList = cloneList(list);

    if (doneTaskList[index].status === "active") {
      doneTaskList[index].status = "inactive";
    } else {
      doneTaskList[index].status = "active";
    }

    setList(doneTaskList);
  };

  const deleteTask = (id) => {
    const index = list.findIndex((item) => item.id === id);
    const deleteList = cloneList(list);

    deleteList.splice(index, 1);
    setList(deleteList);
  };

  const editTask = ({ inputValues }) => {
    const index = list.findIndex((item) => item.id === itemSelected.id);
    const editTaskList = cloneList(list);

    editTaskList[index].title = inputValues.title;
    editTaskList[index].description = inputValues.description;

    setList(editTaskList);
    setIsModalOpen(false);
  };

  return (
    <>
      <ul className="todoContent">
        {list.map((item, index) => (
          <li key={index} className="list">
            <span className={item.status === "inactive" ? "buttonDone" : ""}>
              {item.title}
            </span>

            <div className="todoContentButton">
              <div className="contentButton">
                <button className="button" onClick={() => doneTask(item.id)}>
                  {item.status === "inactive" ? (
                    <img src="/icons/tickicon.png" />
                  ) : (
                    <></>
                  )}
                </button>
              </div>

              <MenuItem
                deleteTask={deleteTask}
                item={item}
                setIsModalOpen={setIsModalOpen}
                setItemSelected={setItemSelected}
              />
            </div>
          </li>
        ))}
      </ul>

      <TodoModal
        mode="edit"
        list={list}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        onChange={editTask}
        itemSelected={itemSelected}
      />
    </>
  );
};

export default TodoList;
