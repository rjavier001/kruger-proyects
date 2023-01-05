import "./App.css";
import "./Todo.scss";
import Container from "./components/Container";
import TodoApp from "./components/todoApp";

function App() {
  return (
    <div className="App">
      <TodoApp />
      <Container />
    </div>
  );
}

export default App;
