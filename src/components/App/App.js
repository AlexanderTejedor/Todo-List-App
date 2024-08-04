import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from '../../hooks/useLocalStorage';

/* 
  localStorage.removeItem('todos_V1');
  
const defaultTodos = [
  {text: 'Levantarme a las 5:30 am', completed: false},
  {text: 'Estudiar minimo 2 horas', completed: false},
  {text: 'Hacer tarea de la Universidad', completed: false},
  {text: 'Hacer reto de Fronted Mentor', completed: false},
  {text: 'Lectura de media hora', completed: false},
]
localStorage.setItem('todos_V1', JSON.stringify(defaultTodos)) */

function App() {
  const {
    item: todos, 
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('todos_V1', []);

  const [searchValue, setSearchValue] = React.useState('');

  // Estados derivados
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    }
  );

  const completeTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos)
  }
  const deleteTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos)
  };

  return (
    <AppUI
    loading={loading}
    error={error}
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  )
  
}

export default App;
