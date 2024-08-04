import React from 'react';
import '../../styles/style.css'
import { FaUserLarge } from "react-icons/fa6";
import { TodoContext } from '../TodoContext/TodoContext';

function TodoCount(){
    const {
        totalTodos,
        completedTodos,
    } = React.useContext(TodoContext);
    return(
        <div className='count-content'>
            <FaUserLarge className='img-container'/>
            <div className='cont-text'>
                <p className='todo-count'>{completedTodos} of {totalTodos} Tasks</p>
                <h1 className='name'>Alexander</h1>
            </div>
        </div>
    );   
}
export {TodoCount}; 