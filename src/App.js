import { useState } from "react";
import './App.css';

const App = () => {
 
  let [value, setvalue] = useState("");
  let [state,setstate] = useState([])

  function add(e) {
    setvalue(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    setstate((prev) => {
      return [...prev,{name:value}]
    })
  }
  return (
    <div>
      😒
      <input
        type="text"
        onChange={add}
        value={value}
      />
      <button onClick={submitHandler}>add</button>
      {
        state.map((i) => {
          return <li className="text">{i.name}</li>
        })
      }
    </div>
  );
};
export default App;

