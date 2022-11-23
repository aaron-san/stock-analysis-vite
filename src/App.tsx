import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Selector from "./components/Selector";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Selector />

      <h1 className="mt-2">Vite + React</h1>
      <div className="card">
        <button
          className="border border-white my-2"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
