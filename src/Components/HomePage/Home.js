import React, { useEffect } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'
import HomePageHeader from '../HomePage_Header/HomePageHeader'

function Home() {
  const navigate = useNavigate()

  useEffect(() => {
    if(localStorage.getItem("token")){
      navigate("/dashBoard")
    }
  },[])

  return (
    <div className='HomePage_container' >
      <HomePageHeader />
      <div className='HomePage_body' >
          <h1>Developers Hub</h1>
          <p>Create a developer profile/portofolio, share posts and get help from other developers</p>
          <div className='HomePage_signingButtons' >
            <button className='signup_button' onClick={() => navigate("/register")} > Sign Up</button>
            <button className='login_button' onClick={() => navigate("/login")} >Login</button>
          </div>
      </div>
    </div>
  )
}

export default Home