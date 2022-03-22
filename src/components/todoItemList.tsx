import { TodoItem } from "../model";
import { useTodoStore } from "../useStores";

function TodoListItem(props: TodoItem) {
  const { todoStore } = useTodoStore();
  function onItemClick() {
    todoStore.toggle_todo(props.id);
  }
  function onItemRemoveHandler() {
    if (window.confirm("Are you sure to delete item?"))
      todoStore.remove_todo(props.id);
  }
  return (
    <div className="card col-6">
      <div className="card-header">
        <h5 className="card-title">{props.title}</h5>
        <div className="algin-left">
          <span>
            {!props.complete ? (
              <span className="badge bg-danger" onClick={onItemClick}>
                <h5>
                  Not Completed<i className="bi bi-check"></i>
                </h5>
              </span>
            ) : (
              <span className="badge bg-success" onClick={onItemClick}>
                <h5>
                  Completed<i className="bi bi-check"></i>
                </h5>
              </span>
            )}
          </span>
          <span className="badge bg-danger mx-3 my-2" onClick={onItemRemoveHandler}>
            <h5>
              Remove<i className="bi bi-trash"></i>
            </h5>
          </span>
        </div>
      </div>
      {/* <p className="card-text">pr</p> */}
    </div>
  );
}

export default TodoListItem;
