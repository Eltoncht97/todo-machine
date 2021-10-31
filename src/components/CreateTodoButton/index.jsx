import React, { useContext } from "react";
import { TodoContext } from "../../context";
import "./CreateTodoButton.css";

export const CreateTodoButton = () => {
  const { openModal, setOpenModal } = useContext(TodoContext);
  const onClickButon = () => {
    setOpenModal(prevState => !prevState)
  };
  return (
    <button
      className={openModal ? "CreateTodoButton CreateTodoButton-active" : 'CreateTodoButton'}
      onClick={() => onClickButon()}
    >
      +
    </button>
  );
};
