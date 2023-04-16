import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import "./style.css";
// متریال ui  حذف شود
const MenuTodo = ({ deleteTask, item, setIsModalOpen }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <img className="imgMore " src="/icons/more.png"></img>
      </Button>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
      >
        <MenuItem onClick={() => setIsModalOpen(true)}>
          <img src="/icons/editTask.png"></img>
        </MenuItem>
        <MenuItem onClick={() => deleteTask(item.id)}>
          <img src="/icons/deleteTask.png"></img>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MenuTodo;
