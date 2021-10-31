import React, { useContext } from "react";
import { TodoContext } from "../../context";
import "./TodoSearch.css";

export const TodoSearch = () => {
  const {searchValue, setSearchValue} = useContext(TodoContext)

  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value)
    console.log(searchValue);
  };
  return (
    <input
      type="text"
      className="TodoSearch"
      placeholder="Cebolla"
      name="searchValue"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
};
