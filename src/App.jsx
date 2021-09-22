
import React, { useState } from "react";
import './App.css'



const App=()=> {
  const[users, setUsers] = useState([]);

  const loadUsers=async()=>{
    console.log("Hello");
    const response = await fetch("https://reqres.in/api/users?page=1" );
    const json = await response.json();
    setUsers(json.data);
  };
return (
    <div className="App">
      <header>

      <h1 class="logo">User Data</h1>
      
      <button onClick={loadUsers} className="button"> Data </button>
      </header>
      <ul class ="points">

        {users.map(({ id , email,first_name,last_name,avatar }) => (
          <li class="list" key = {id}> 
            <img class="dp" src={avatar}></img>
            <li class="subli" id="name">Name : {first_name} {last_name}</li>
            <li class="subli" id="email">Email-Id : {email}</li>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;