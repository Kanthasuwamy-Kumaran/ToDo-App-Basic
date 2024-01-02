import React, {useState} from "react";
//Add API, we ll need it later when we send a delete request
const API_BASE= 'http://localhost:4001/todo';

function TodoItem(props){
 // Pass down props
 // Modify hardcoding content to dynamic content
 // Now it displays the data we created in advance
const {name, id, setItems} = props
const deleteTodo = async(id) => {
    try{
        const response = await fetch(API_BASE + "/delete/" + id, {
            method: "DELETE",
          });
        if(!response.ok){
            throw new Error("Faild to delete a task")
        } 
        const data = await response.json()
        setItems(items=> items.filter(item=> item._id !== data._id))
    }catch (error) {
        console.error("Error updating task status:", error);
      }
  }

<div className="delete-todo" onClick={()=>deleteTodo(id)}>
<span >X</span>
</div>
    return(
     <div className="todo">
        <div className="text">{name}</div>
        <div className="delete-todo" onClick={()=>deleteTodo(id)}><span >X</span></div>
      </div>
    )
}

export default TodoItem;