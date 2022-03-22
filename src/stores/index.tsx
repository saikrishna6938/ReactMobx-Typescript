import { createContext } from "react";
import { ToDoStoreContext } from "./todoStore";

export const StoreContext = createContext({
  todoStore: new ToDoStoreContext()
});
