import React, {useState} from 'react'
import HomePageHeader from '../HomePage_Header/HomePageHeader'
import './Register.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function Register() {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    fullName : "",
    email : "",
    mobile : null,
    skill : "",
    password : "",
    confirmPassword : ""
  })

  const registerDataChange = (event) => {
    const {name,value} = event.target
    setRegisterData({...registerData, [name] : value})
  }

  const mobileNumberChange = (event) => {
    let {name,value} = event.target;
    value = parseInt(value)
    setRegisterData({...registerData, [name] : value })
  }

  const userRegister = (event) => {
    event.preventDefault()
    axios.post("http://localhost:5050/register", registerData).then((resp => navigate("/dashboard")))
  }


  return (
    <div className='register_container' >
      <HomePageHeader />
      <div className='register_container' >
        <h1>Sign Up</h1>
        <h3>Create Your Account</h3>
        <form onSubmit={userRegister} >
          <div className='register_input_blocks' >
            <input onChange={registerDataChange} required  type="text" id='fullName' name ="fullName" placeholder='Name' />
          </div>
          <div className='register_input_blocks' >
            <input onChange={registerDataChange} required  type="email" id='email' name ="email" placeholder='Email Address' />
          </div>
          <div className='register_input_blocks' >
            <input onChange={mobileNumberChange} required type="number" id='mobile' name ="mobile" placeholder='Mobile' />
          </div>
          <div  className='register_input_blocks' >
            <input onChange={registerDataChange} required type="text" id='skill' name ="skill" placeholder='Skill' />
          </div>
          <p>Please provide skills by seperation of comma (,)</p>
          <div className='register_input_blocks' >
            <input onChange={registerDataChange} required type="text" id='password' name ="password" placeholder='Password' />
          </div>
          <div className='register_input_blocks' >
            <input onChange={registerDataChange} type="text" id='confirmPassword' name ="confirmPassword" placeholder='Confirm Password' />
          </div>
          <div onChange={registerDataChange} required className='register_input_blocks' >
            <input type="submit" value = "Register" />
          </div>
          <div>
            Don't have and account? <span onClick={() => navigate("/register")} >Sign Up</span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register