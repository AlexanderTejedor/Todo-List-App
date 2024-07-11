import './css/style.css'
function TodoButtom(){
    return(
        <div className='botton-container'>
            <button onClick={ (event) => {
                console.log('click')
                console.log(event)
                console.log(event.target)
            }
            } className='todo-button'>+</button>
        </div>
    );
}
export { TodoButtom };