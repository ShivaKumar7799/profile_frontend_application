import React,{useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


function MyProfile() {
  const [profileData, setProfileData] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:5050/myProfile",{
      headers : {
        "x-token" : localStorage.getItem("token")
      }
    }).then((resp) => {console.log(resp.data); setProfileData(resp.data)} )
  },[])
  if(!localStorage.getItem("token")){
    navigate("/login")
  }
  return (
    <div>
      MyProfile
      <div>
        {profileData && <div> 
          <div> {profileData?.fullName && <h1>Full Name : {profileData.fullName}</h1>} </div>
          <div> <h1>Skills :</h1> {profileData.skill.split(",").map((item) => <h3>{item}</h3> )} </div>
        </div> }
      </div>
    </div>
  )
}

export default MyProfile