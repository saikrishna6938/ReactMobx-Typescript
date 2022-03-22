import { observer } from "mobx-react";
import { useTodoStore } from "../useStores";

function NavBar() {
  const { todoStore } = useTodoStore();
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
          Remaining:{" "}
          <span className="badge badge-pill badge-danger">
            {todoStore.status.remaining}
          </span>
        </span>
        <span className="navbar-brand mb-0 h1">
          Completed:{" "}
          <span className="badge badge-pill badge-success">
            {todoStore.status.completed}
          </span>
        </span>
      </nav>
    </div>
  );
}

export default observer(NavBar);
