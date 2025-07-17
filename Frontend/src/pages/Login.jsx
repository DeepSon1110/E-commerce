import React from "react";

const Login = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
  return (
    <>
      <div>Login</div>
      <form onSubmit = {handleSubmit}> 
        <div>
            <label htmlFor="email">Email:</label>
            <input type="text" id= "email" placeholder= "example@gmai.com" />
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id= "password" placeholder= "***********"/>
        </div>
        <button type = "submit">submit</button>
      </form>
    </>
  );
};

export default Login;
