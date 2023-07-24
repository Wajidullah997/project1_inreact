import React, { useState } from 'react';
import Todolist from './Todolist';
import './index.css';

function App() {

  const [inputList, setinputList] = useState();
  const [Items, setItems] = useState([]);


  const itemEvent = (event) => {
    setinputList(event.target.value);
  };
 
  const listItems = () => {
    setItems((olditem) => {
      return [...olditem, inputList]
    });
    setinputList("")
  };
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
        <br />
          <h1>ToDo List</h1>
          <br />
          <input type='text' placeholder='Add a Items' value={inputList} onChange={itemEvent}/>
          <button onClick={listItems}> + </button>
          <ol>  
           
            {Items.map((Itemval) =>{     
             
             return <Todolist text={Itemval} />
            })}
          </ol>
        </div>
      </div>
   </>
  );
}

export default App;
