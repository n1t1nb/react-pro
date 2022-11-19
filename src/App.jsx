import { useState } from 'react'


function App() {

  const [data,setData]=useState("");
  const [darray,setdarray]=useState([]);

  const handle=(e)=>{
    setData(e.target.value);
  }

  const addData=(e)=>{
    e.preventDefault();
    setdarray([...darray,data]);
    setData("");
  }
  return (
    <>
    <h3>react</h3>
    <form>
      <input type="text" value={data} onChange={handle}/>
      <button onClick={addData}>Add</button>

    </form>
    <div>
      <ul>
        {darray.map((value,key)=>{
          return (<li key={key}>{value}</li>)
        })}
      </ul>
    </div>
    </>
  )
}

export default App
