import { useState } from 'react'
import style from './app.css';

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
    <header className='main-header'>
      <nav className='nav main-nav'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Store</a></li>
        <li><a href="#">About</a></li>
      </nav>
    </header>
    <h3 className='title-name'>To do List</h3>
    

    <section className='container'>
    <form>
      <input type="text" value={data} onChange={handle}/>
      <button onClick={addData}>Add</button>

    </form>
    <div>

    <div className='header'>
      <p>Things to be done</p>
      <ol>
        {darray.map((value,key)=>{
          return (<li key={key}>{value}</li>)
        })}
      </ol>
    </div>
      
    </div>
    </section>
    <footer>
      <nav className='nav-footer'>
        <li><a href='#'>facebook</a></li>
        <li><a href='#'>twitter</a></li>
        <li><a href='#'>instagram</a></li>
      </nav>
    </footer>
    </>
  )
}

export default App
