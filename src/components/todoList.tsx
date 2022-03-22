import { observer } from "mobx-react";
import React from "react";
import { useTodoStore } from "../useStores";
import TodoListItem from "./todoItemList";

function TodoList() {
  const { todoStore } = useTodoStore();
  return (
    <div>
      <nav className="nav"></nav>
      <div>
        <div className="col-md align-items-center">
          {todoStore.todoStore.map((item) => {
            return <TodoListItem key={item.id} {...item}></TodoListItem>;
          })}
        </div>
      </div>
    </div>
  );
}

export default observer(TodoList);
