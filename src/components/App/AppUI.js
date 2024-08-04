import React from 'react';
import { TodoCount } from '../TodoCount/TodoCount';
import { TodoSearch } from '../TodoSearch/TodoSeach';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoButtom } from '../TodoButtom/TodoButton';
import { TodoForm } from '../TodoButtom/TodoButton';
import { TodoDay } from '../TodoDate/TodoDay';
import { TodoDate } from '../TodoDate/TodoDate';
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { TodosError } from '../TodosError/TodosError';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';
import { Modal } from '../Modal/Modal';
import { TodoContext } from '../TodoContext/TodoContext';

function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <main className='main-container'>
            <section className='todo-content'>
                <div className='todo-date__content'>
                    {/* header */}
                    <TodoDay/>
                    <TodoDate/>
                </div>
                <TodoCount/>
                    {/* input */}
                <TodoSearch/>
                {/* list */}
                <TodoList>
                    {loading && <TodosLoading/>}
                    {error && <TodosError/>}
                    {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}
                    {searchedTodos.map(todo => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo (todo.text)}
                            onDelete={() => deleteTodo (todo.text)}
                        />
                    ))}
                </TodoList>
                {/* Buttom */}
                <TodoButtom setOpenModal={setOpenModal}/>

                {openModal && (
                    <Modal>
                        <TodoForm/>
                    </Modal>
                )}
            </section>
        </main>
        );
}
export { AppUI };