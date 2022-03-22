import NavBar from "./components/navBar";
import { TodoForm } from "./components/todoForm";
import TodoList from "./components/todoList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <TodoForm></TodoForm>
      <TodoList></TodoList>
    </div>
  );
}
