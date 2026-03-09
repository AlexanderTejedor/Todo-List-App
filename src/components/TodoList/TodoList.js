import "../../styles/style.css";
function TodoList(props) {
  return (
    <section>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {!props.loading && !props.searchTodos.length && props.onEmtyTodos()}

      {props.searchTodos.map(props.render)}

      <ul className="todo-list">{props.children}</ul>
    </section>
  );
}
export { TodoList };
