import React from "react";
import "../../styles/style.css";

function TodoSearch({ searchValue, setSearchValue, loading }) {
  return (
    <input
      className="todo-input"
      placeholder="Filtra por tarea"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      disabled={loading}
    />
  );
}
export { TodoSearch };
