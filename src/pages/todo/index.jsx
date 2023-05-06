import { useEffect, useState } from "react";
import { TodoAddTask, TodoList } from "../../components/todo";
import "./style.css";

const Todo = () => {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("todo_list")) || []
  );

  useEffect(() => {
    localStorage.setItem("todo_list", JSON.stringify(list));
  }, [list]);

  return (
    <div className="todoContainer">
      <div className="todoBody">
        <div className="todoBodyTitle">
          <p>TODO</p>
        </div>
        <TodoList list={list} setList={setList} />

        <TodoAddTask setList={setList} />
      </div>
    </div>
  );
};

export default Todo;
