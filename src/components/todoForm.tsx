import { useRef } from "react";
import { TodoItem } from "../model";
import { useTodoStore } from "../useStores";

export function TodoForm() {
  const { todoStore } = useTodoStore();
  let titleRef = useRef<any>("");
  function AddItemHandler() {
    const item: TodoItem = {
      id: +Math.random().toFixed(5),
      title: titleRef.current.value,
      complete: false
    };
    todoStore.add_todo(item);
    titleRef.current.value = "";
  }

  return (
    <div className="col-6 my-3">
      <div className="form-group d-flex ">
        <input
          type="text"
          name="title"
          ref={titleRef}
          className="form-control"
        />
        <button className="btn btn-success" onClick={AddItemHandler}>
          {" "}
          Add{" "}
        </button>
      </div>
    </div>
  );
}
