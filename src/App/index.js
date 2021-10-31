import { TodoMachine } from "../components/TodoMachine";
import { TodoProvider } from "../context";
import "./App.css";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar curso de motivacion", completed: false },
//   { text: "Llorar con la llorona", completed: false },
//   { text: "Ver naruto", completed: true },
// ];
function App() {

  return (
    <TodoProvider>
      <TodoMachine />
    </TodoProvider>
  );
}

export default App;
