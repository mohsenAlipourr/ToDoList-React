import { useState } from "react";
import "./style.css";

const MenuItem = ({ deleteTask, item, setIsModalOpen, setItemSelected }) => {
  const [isMenu, setIsMenu] = useState(false);

  const handelMenu = () => {
    if (isMenu) {
      setIsMenu(false);
    } else {
      setIsMenu(true);
    }
  };

  return (
    <>
      <div className={isMenu ? "activeMenu" : "openMenu"}>
        <img
          src="/icons/editTask.png"
          onClick={() => {
            setIsModalOpen(true);
            setItemSelected(item);
          }}
          className="menuItemButton"
        />

        <img
          src="/icons/deleteTask.png"
          onClick={() => deleteTask(item.id)}
          className="menuItemButton"
        />
      </div>

      <img
        src={`${!isMenu ? "/icons/more.png" : "/icons/close.png"}`}
        className="menuItem "
        onClick={() => handelMenu(true)}
      />
    </>
  );
};

export default MenuItem;
