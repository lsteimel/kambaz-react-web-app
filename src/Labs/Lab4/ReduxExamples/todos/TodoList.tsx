import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

import { RootState } from "../../store";
import type { Todo } from "./todosReducer";

export default function TodoList() {
  const { todos } = useSelector((state: RootState) => state.todoReducer);
  return (
    <div>
      <h2>Todo List</h2>
      <ListGroup>
        <TodoForm />
        {todos.map((todo: Todo) => (
          <TodoItem todo={todo} />
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}
