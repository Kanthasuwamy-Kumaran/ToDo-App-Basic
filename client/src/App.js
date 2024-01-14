
import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const API_BASE = 'http://localhost:4001/todo';

function App() {
  
  const [items, setItems] = useState([]);

  // Add input state, we will store the user's input in this state
  const [input, setInput] = useState("");

  useEffect(() => {
    GetTodos();
  }, []);

// Store the target's value into the input state 
  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const GetTodos = () => {
    fetch(API_BASE)
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.log(err))
  }
  const addItem = async() => {
    const data = await fetch(API_BASE + "/new", {
     method: "POST",
     headers: {
       "content-type" : "application/json"
     },
     body: JSON.stringify({
       name: input,
         })
    }).then(res => res.json()) 
    await GetTodos()
    setInput('')
   }

  return (
 // The input field's value is now taken from the input state. 
 //It will update dynamically as the user types.
 // Add the onChange method, so that handleChange function will be executed
 // every time something has been changed in the input field.

    <div className="container">
      <div className="heading">
        <h1>TO-DO-APP</h1>
      </div>

      <div className="form">
        <input type='text' value={input} onChange={handleChange}></input>
        <button onClick={()=>addItem()}>
 <span>ADD</span>
 </button>
      </div>
 
      <div className="todolist">  
      {items.map((item)=> {
        const {_id, name} = item
        return  <TodoItem name={name} id={_id} setItems={setItems}/>   
      })
    }
      </div>
    </div>
 
  );
}

export default App;