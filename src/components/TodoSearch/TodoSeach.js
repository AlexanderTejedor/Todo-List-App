import React from 'react';
import '../../styles/style.css'

function TodoSearch({searchValue, setSearchValue}){
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