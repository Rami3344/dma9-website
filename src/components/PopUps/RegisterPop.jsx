import React, { useState } from 'react'
import "./LoginPop.css"
import axios from 'axios';
function RegisterPop({isOpenReg,setIsOpenReg}) {
  const [username , setUsername] = useState()
  const [email , setEmail] = useState()
  const [password , setPassword] = useState()
  const handleSubmit = () => {
    axios.post("http://localhost:3001/register",{username,email,password})
  }

  const handleOpenReg= () =>{
    setIsOpenReg(!isOpenReg);
    console.log(isOpenReg)
}
  return (
    <div className={`${!isOpenReg ?'active' : '' } show `}>
        <div className='loginForm'>
          <button className='close' onClick={handleOpenReg}>X</button>
          <h1>Sign Up </h1>
          <form method='post' onSubmit={handleSubmit} action='http://localhost:3001/register'>
            <div>
              <span>Username</span><br/><input type='text' name='username' placeholder='Type your Username' onChange={(e)=> setUsername(e.target.value)} />
            </div>
            <div>
              <span>Email</span><br/><input type='email' name='email' placeholder='Type your Email' onChange={(e)=> setEmail(e.target.value)} />
            </div>
            <div>
              <span>Password</span><br/><input type='password' name='password' placeholder='Type your Password' onChange={(e)=> setPassword(e.target.value)}/>
            </div>
            <input type='submit' value="Submit" />
            </form>
        </div>
    </div>
  )
}

export default RegisterPop