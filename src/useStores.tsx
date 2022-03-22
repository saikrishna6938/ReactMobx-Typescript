import { useContext } from "react";
import { StoreContext } from "./stores";

export const useTodoStore = () => useContext(StoreContext);
