import React, { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const TodoContext = createContext()

const TodoProvider = (props) => {

  const { item:todos, saveItem:saveTodos, loading, error } = useLocalStorage('TODOS_V1', [])

  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false)

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length > 0) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) =>
      todo.text.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      completed: false,
      text
    })
    saveTodos(newTodos)
  }

  const completeTodos = (todoText) => {
    const todoIndex = todos.findIndex(todo => todo.text === todoText)
    console.log(todoIndex)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  const deleteTodos = (todoText) => {
    const todoIndex = todos.findIndex(todo => todo.text === todoText)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (
    <TodoContext.Provider value={{
      loading,
      error,
      searchValue,
      setSearchValue,
      completedTodos,
      totalTodos,
      searchedTodos,
      addTodo,
      completeTodos,
      deleteTodos,
      openModal,
      setOpenModal,
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }