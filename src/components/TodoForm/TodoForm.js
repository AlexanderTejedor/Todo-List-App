import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import '../../styles/style.css'

function TodoForm(){
    const { 
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) =>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    const onCancel = () =>{
        setOpenModal(false);
    }
    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo ToDo</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Aquí tu nuevo ToDo"
            />
            <div className="TodoForm-buttonContainer">
                <button type="button" className="TodoForm-button--cancel" onClick={onCancel}>Cancelar</button>
                <button className="TodoForm-button--add">Añadir</button>
            </div>
        </form>
    )
};

export { TodoForm };