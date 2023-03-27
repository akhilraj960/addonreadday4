import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

// http://192.168.56.1:5500/login

function App() {
  return (
    <div className="App">
      <TodoList/>
    </div>
  );
}

export default App;
