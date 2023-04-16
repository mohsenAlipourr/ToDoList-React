import { useState } from "react";
import TodoModal from "../todoModal";
import MenuTodo from "./menu";
import "./style.css";

const TodoList = ({ list, setList }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

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

  const deleteTask = (id) => {
    const index = list.findIndex((item) => item.id === id);

    /* list.splice(index, 1); //bug

    const deleteList = list.map((item) => {
      return item;
    });

    setList(deleteList); */

    const deleteList = [...list];
    deleteList.splice(index, 1);
    setList(deleteList);
  };

  const editTask = () => {
    /* if (mode === "edit") {
      setInputValues(list);
    } */
  };

  const handelMenu = () => {
    if (isMenu) {
      setIsMenu(false);
    } else {
      setIsMenu(true);
    }
  };

  return (
    <>
      <ul className="todoContent">
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
                  <img src="/icons/tickicon.png"></img>
                ) : (
                  ""
                )}
              </button>

              {/*  <MenuTodo
                deleteTask={deleteTask}
                item={item}
                setIsModalOpen={setIsModalOpen}
              /> */}

              <img
                className="imgMore "
                src="/icons/more.png"
                onClick={() => handelMenu(true)}
              ></img>

              <div className={isMenu ? "activeMenu" : "openMenu"}>
                <img src="/icons/editTask.png"></img>
                <img src="/icons/deleteTask.png"></img>
              </div>
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
      />
    </>
  );
};

export default TodoList;
