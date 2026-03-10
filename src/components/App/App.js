import React from "react";
import { useTodos } from "./useTodos.js";
import { TodoCount } from "../TodoCount/TodoCount";
import { TodoSearch } from "../TodoSearch/TodoSeach";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoButtom } from "../TodoButtom/TodoButton";
import { TodoForm } from "../TodoForm/TodoForm";
import { TodoDay } from "../TodoDate/TodoDay";
import { TodoDate } from "../TodoDate/TodoDate";
import { TodosLoading } from "../TodosLoading/TodosLoading";
import { TodosError } from "../TodosError/TodosError";
import { EmptyTodos } from "../EmptyTodos/EmptyTodos";
import { Modal } from "../Modal/Modal";
import { TodoHeader } from "../TodoHeader/TodoHeader";

function App() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();

  return (
    <main className="main-container">
      <section className="todo-content">
        <div className="todo-date__content">
          {/* header */}
          <TodoDay />
          <TodoDate />
        </div>
        <TodoHeader>
          <TodoCount totalTodos={totalTodos} completedTodos={completedTodos} />
          {/* input */}
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </TodoHeader>
        {/* list */}
        <TodoList
          error={error}
          loading={loading}
          searchTodos={searchedTodos}
          totalTodos={totalTodos}
          searchText={searchValue}
          onError={() => <TodosError />}
          onLoading={() => <TodosLoading />}
          onEmtyTodos={() => <EmptyTodos />}
          onEmtySearchResults={(searchText) => (
            <p>No has creado un Todo de {searchText}</p>
          )}
          render={(todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )}
        >
          {/* {(todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )} */}
        </TodoList>
        {/* Buttom */}
        <TodoButtom setOpenModal={setOpenModal} />

        {openModal && (
          <Modal>
            <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
          </Modal>
        )}
      </section>
    </main>
  );
}

export default App;
