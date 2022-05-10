import React, { useState } from 'react';
import LoginForm from './components/LoginForm';


function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password){
    console.log("Logged in");
  } else {
    console.log("Details do not match!");
  }
     
  }

  const Logout = () => {
   setUser ({email: ""});
  }

  return (
    <div className="App">
    {(user.email != "") ?
    ( <div className = "welcome">
      <h2> Welcome, <span>{user.email}</span></h2>
      <button onClick={Logout}>Logout</button>
    </div>) : (
      < LoginForm Login={Login} />
    )}

    </div>
  );
}

export default App;
