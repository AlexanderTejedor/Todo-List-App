import "../../styles/style.css";
function TodoList(props) {
  const renderFuc = props.render || props.children;
  return (
    <section>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {!props.loading && !props.searchTodos && props.onEmtyTodos()}
      {!!props.totalTodos &&
        !props.searchTodos.length &&
        props.onEmtySearchResults(props.searchText)}

      {props.searchTodos.map(renderFuc)}

      <ul className="todo-list">{props.children}</ul>
    </section>
  );
}
export { TodoList };
