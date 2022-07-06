import {useState} from 'react'


const App = () => {
  let [state,setstate]=useState('')
  let[value,setvalue]=useState('')
  function add(){
    setvalue(state)
  }
  return <div>😒
    <input type='text' onChange={(e)=>setstate(e.target.value)} value={state}/>
    <button onClick={add}>add</button>
    <p>{value}</p>
  </div>;
};
export default App;
