import '../../styles/style.css'
import { FaRegCircleCheck } from "react-icons/fa6"
import { RiCloseFill } from "react-icons/ri";

function TodoItem (props){
    return(
        <li className='todo-list__items'>
            <FaRegCircleCheck 
                type='checkbox' className={`check ${props.completed && 'check-active'}`} onClick={props.onComplete}
            />
            <p className={`parrafo ${props.completed && 'parrafo-completed'}`}>{props.text}</p>
            <RiCloseFill className='delete icon-delete' onClick={props.onDelete}/>
        </li>
    );
}
export {TodoItem}