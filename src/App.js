import "./App.css";
import { TaskList } from "./components/TaskList";
import { DiReact } from "react-icons/di";
import { FiExternalLink } from "react-icons/fi";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <DiReact style={{ fontSize: 150 }} />
        <div className="logo-container">
          <h1>React Tasks List</h1>
        </div>
        <div className="app-container">
          <TaskList></TaskList>
        </div>
      </div>
      <div className="footer">
        <a
          href="https://github.com/ilm1337"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github <FiExternalLink />
        </a>
        <a
          href="https://www.linkedin.com/in/ivanlopezmontero/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn <FiExternalLink />
        </a>
      </div>
    </div>
  );
}

export default App;
