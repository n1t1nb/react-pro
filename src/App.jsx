import { useState } from 'react'


function App() {

  const [data,setData]=useState("");
  const [darray,setdarray]=useState([]);
  const [sdata,setSData]=useState("");
  const [sdarray,setsdarray]=useState([]);

  const handle=(e)=>{

    if(e.target.name=="search"){
      setSData(e.target.value)
      setsdarray(darray.filter((val)=> {
        return  val.includes(sdata);
    }))
  }
    else
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


      <input type="text" value={sdata} onChange={handle} name="search"/>
      


    </form>
    <div>
      <ul>
        {darray.map((value,key)=>{
          return (<li key={key}>{value}</li>)
        })}
      </ul>
    </div>

    <div>
      search result
      <ul>
        {sdarray.map((value,key)=>{
          return (<li key={key}>{value}</li>)
        })}
      </ul>
    </div>
    </>
  )
}

export default App
