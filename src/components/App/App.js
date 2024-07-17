import React from 'react';
import { TodoCount } from '../../TodoCount';
import { TodoSearch } from '../../TodoSeach';
import { TodoList } from '../../TodoList';
import { TodoItem } from '../../TodoItem';
import { TodoButtom } from '../TodoButtom/TodoButton';
import { TodoDay } from '../TodoDate/TodoDay';
import { TodoDate } from '../TodoDate/TodoDate'

/* const defaultTodos = [
  {text: 'Levantarme a las 5:30 am', completed: false},
  {text: 'Estudiar minimo 2 horas', completed: false},
  {text: 'Hacer tarea de la Universidad', completed: false},
  {text: 'Hacer reto de Fronted Mentor', completed: false},
  {text: 'Lectura de media hora', completed: false},
]
localStorage.setItem('todos_V1', JSON.stringify(defaultTodos))
localStorage.removeItem('todos_V1'); */

function useLocalStorage(itemName, initialValue) {

  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;

  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = [];
  }else{
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

function App() {
  
  //Estados del todo
  const [todos, saveTodos] = useLocalStorage('todos_V1', []);
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
  }
  return (
    <main className='main-container'>
      <section className='todo-content'>
        <div className='todo-date__content'>
          {/* header */}
          <TodoDay/>
          <TodoDate/>
        </div>
        <TodoCount completed={completedTodos} total={totalTodos}/>
        {/* input */}
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        {/* list */}
        <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
          ))}
        </TodoList>

        {/* Buttom */}
        <TodoButtom/>
      </section>
    </main>
  );
}

export default App;
