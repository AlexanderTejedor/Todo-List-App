import React from 'react';
import '../../styles/style.css'
import { TodoContext } from '../TodoContext/TodoContext';

function TodoSearch(){
    const {
        searchValue,
        setSearchValue,
    } = React.useContext(TodoContext);
    return(
        <input className='todo-input' 
        placeholder="Filtra por tarea"
        value={searchValue}
        onChange={(event) =>{
            setSearchValue(event.target.value);
        }}
        />
    );   
}
export {TodoSearch};