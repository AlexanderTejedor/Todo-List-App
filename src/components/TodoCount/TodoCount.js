import '../../styles/style.css'
import { FaUserLarge } from "react-icons/fa6";

function TodoCount({total, completed}){
    return(
        <div className='count-content'>
            <FaUserLarge className='img-container'/>
            <div className='cont-text'>
                <p className='todo-count'>{completed} of {total} Tasks</p>
                <h1 className='name'>Alexander</h1>
            </div>
        </div>
    );   
}
export {TodoCount}; 