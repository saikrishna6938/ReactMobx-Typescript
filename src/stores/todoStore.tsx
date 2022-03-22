import { makeObservable, observable } from "mobx";
import { TodoItem } from "../model";
export class ToDoStoreContext {
  todoStore: TodoItem[] = [
    {
      id: 1,
      title: "Task 1",
      complete: false
    },
    {
      id: 2,
      title: "Task 2",
      complete: false
    },
    {
      id: 3,
      title: "Task 3",
      complete: false
    }
  ];
  constructor() {
    makeObservable(this, {
      todoStore: observable
    });
  }

  add_todo(item: TodoItem) {
    this.todoStore.push(item);
  }

  remove_todo(id: number) {
    const items = this.todoStore.filter((res) => res.id !== id);
    this.todoStore = items;
  }

  toggle_todo(id: number) {
    this.todoStore.find((res) => {
      if (res.id === id) {
        res.complete = res.complete ? false : true;
      }
    });
  }

  get status() {
    let completed = 0;
    let remaining = 0;
    this.todoStore.map((res) => {
      res.complete ? completed++ : remaining++;
      return res;
    });
    return { completed, remaining };
  }
}
