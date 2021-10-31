import React, { useContext } from "react";
import { TodoContext } from "../../context";
import { TodoItem } from "../TodoItem";
import { TodoCounter } from "../TodoCounter";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

export const TodoMachine = () => {
  const { error, loading, searchedTodos, completeTodos, deleteTodos, openModal } =
    useContext(TodoContext);
  return (
    <>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {error && <p>Desesperate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no te desesperes...</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primer TODO</p>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        ))}
      </TodoList>
      {
        openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )
      }

      <CreateTodoButton/>
    </>
  );
};
