import '../../styles/style.css'
function TodoButtom({setOpenModal}) {
    return(
        <div className='botton-container'>
            <button onClick={ (event) => {
                setOpenModal(prevState => !prevState)
            }
            } className='todo-button'>+</button>
        </div>
    );
}
export { TodoButtom };