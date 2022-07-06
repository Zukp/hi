import { useState } from "react";
import './App.css';

const App = () => {
  let [state, setstate] = useState("");
  let [value, setvalue] = useState("");
  function add() {
    setvalue(state);
  }
  return (
    <div>
      😒
      <input
        type="text"
        onChange={(e) => setstate(e.target.value)}
        value={state}
      />
      <button onClick={add}>add</button>
      <p className="text">{value}</p>
    </div>
  );
};
export default App;
