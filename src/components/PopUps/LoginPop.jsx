import React, { useState } from 'react'
import "./LoginPop.css"
import axios from "axios"
function LoginPop({isOpenLog,setIsOpenLog}) {
  const handleOpenLog= () =>{
    setIsOpenLog(!isOpenLog);
    console.log(isOpenLog)
}
const [email,setEmail] = useState();
const [password,setPassword] = useState();
const handleSubmit = () =>{
  axios.post("http://localhost:3001/login",{email,password})
}

  return (
    <div className={`${!isOpenLog ?'active' : '' } show `}>
        <div className='loginForm'>
          <button className='close' onClick={handleOpenLog}>X</button>
          <form method='POST' action='http://localhost:3001/login' onSubmit={handleSubmit}>
          <h1>Sign In </h1>
            <div>
              <span>Email</span><br/><input type='email' name='email' placeholder='Type your email' onChange={(e)=> setEmail(e.target.value)} />
            </div>
            <div>
              <span>Password</span><br/><input type='password' name='password' onChange={(e)=> setPassword(e.target.value)} placeholder='Type your Password'/>
            </div>
            <input type='submit' value="Submit" />
            </form>
        </div>
    </div>
  )
}

export default LoginPop
