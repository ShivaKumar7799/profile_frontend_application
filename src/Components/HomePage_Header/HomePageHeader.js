import React from 'react'
import { useNavigate } from 'react-router-dom'
function HomePageHeader() {
  const navigate = useNavigate()
  return (
    <div className='HomePage_Header' > 
      <h2><span onClick={() => navigate("/")} >Developers Hub</span></h2>
      <div className='HomePage_HeaderContent' >
        <span onClick={() => navigate("/register")} > Register </span>
        <span onClick={() => navigate("/login")} > Login </span>
      </div>
  </div> 
  )
}

export default HomePageHeader