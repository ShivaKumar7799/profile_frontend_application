import React, {useState, useEffect} from 'react'
import "./DashBoard.css"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function DashBoard() {
  const [state, setState] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:5050/allProfiles",{
      headers : {
        "x-token" : localStorage.getItem("token")
      }
    }).then((resp) => {console.log(resp.data); setState(resp.data)} )
  },[])
  if(!localStorage.getItem("token")){
    navigate("/login")
  }
  return (
    <div>
        dashboard
        
    </div>
  )
}

export default DashBoard