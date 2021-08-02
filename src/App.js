import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import AddTask from "./Components/AddTask";
import ListTask from "./Components/ListTask";

function App() {
  return (
    <div className="App">
      <div className="todoApp">
      <AddTask />
      <ListTask />
      </div>
    </div>
  );
}

export default App;
