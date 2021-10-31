import React, { useContext, useState } from 'react'
import { TodoContext } from '../../context'
import './TodoForm.css'

export const TodoForm = () => {
  const { addTodo,setOpenModal } = useContext(TodoContext)

  const [newTodoValue, setNewTodoValue] = useState("")

  const onChange = (e) => {
    setNewTodoValue(e.target.value)
  }
  
  const onCancel = () => {
    setNewTodoValue('')
    setOpenModal(prevState => !prevState)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    addTodo(newTodoValue)
    setOpenModal(prevState => !prevState)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea placeholder='Cortar la ceebolla para el almuerzo' value={newTodoValue} onChange={onChange}></textarea>
      <div className="TodoForm-buttonContainer">
        <button className="TodoForm-button TodoForm-button-cancel" type="button" onClick={onCancel}>Cancelar</button>
        <button className="TodoForm-button TodoForm-button-add" type="submit">Añadir</button>
      </div>
    </form>
  )
}
