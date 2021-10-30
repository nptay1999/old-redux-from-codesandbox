import NavbarComponent from "./components/NavbarComponent";
import TodoFormComponent from "./components/TodoFormComponent";
import TodosComponent from "./components/TodosComponent";
import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <h1>My React Redux App</h1>
      <NavbarComponent />
      <TodoFormComponent />
      <TodosComponent />
    </div>
  );
}
