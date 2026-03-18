import React from "react";
import "../../styles/style.css";
import { FaUserLarge } from "react-icons/fa6";

function TodoCount({ totalTodos, completedTodos, loading }) {
  return (
    <div className="count-content">
      <FaUserLarge className="img-container" />
      <div className="cont-text">
        <p className={`todo-count ${!!loading && "todo-count--loading"}`}>
          {completedTodos} of {totalTodos} Tasks
        </p>
        <h1 className="name">Alexander</h1>
      </div>
    </div>
  );
}
export { TodoCount };
