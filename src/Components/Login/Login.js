import React, { useEffect } from 'react'
import HomePageHeader from '../HomePage_Header/HomePageHeader'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function Login() {
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState({
    email : "",
    password : ""
  })
  const [auth,setAuth] = useState(false)

  const handleLoginData = (event) => {
    const {value, name} = event.target
    setLoginData({...loginData,[name] : value})
  }

  const userLogin = (event) => {
    event.preventDefault()
    axios.post("http://localhost:5050/login", loginData).then(resp => {localStorage.setItem("token",resp.data.token); setAuth(true); navigate('/dashBoard')}).catch((err) => console.log(err) )
  }

  useEffect(() => {
    if(localStorage.getItem('token')){
      navigate('/dashBoard')
    }
  },[])
  
  // if(auth){
  //   navigate("/dashBoard")
  // }

  return (
    <div className='loginPage_container' >
      <HomePageHeader />
      <div className='login_container' >
        <h1>Sign In</h1>
        <h3>Sign into Your Account</h3>
        <form onSubmit={userLogin} >
          <div className='login_input_blocks' >
            <input onChange={handleLoginData} value = {loginData.email} required type="email" id='email' name ="email" placeholder='Email Address' />
          </div>
          <div className='login_input_blocks' >
            <input onChange={handleLoginData} value = {loginData.password} required type="password" id='password' name ="password" placeholder='Password' />
          </div>
          <div className='login_input_blocks' >
            <input type="submit" value = "Login" />
          </div>
          <div>
            Don't have and account? <span onClick={() => navigate("/register")} >Sign Up</span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login