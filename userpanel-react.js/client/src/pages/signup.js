import React, {useState, useRef} from 'react'
import axios from 'axios'
import {dontMatch, noRes} from '../components/error'


export default function Signup() {

  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpass, setConfirm] = useState("")

  const sbmt = async () => {

   if (username) {
    if (password === confirmpass) {
      if (password.match(/^[A-Za-z]\w{7,14}$/)) {
        const userData = {username: username, password: password}
        userData ? axios.post('http://localhost:3001/register', userData)
        .then(response => {
         response ? alert(response.data.message) : noRes()
        })
        .then(data => { window.location.reload()}) 
        : alert("something went wrong")
      }else{
       alert("weak password")
      }
    }else{
     dontMatch()
    }
   }else{
    alert("no username")
   }
  }



  const changeName = (e) => {
   setUserName(e.target.value)  
  }
  const changePassword = (e) => {
   setPassword(e.target.value)
  }
  const changeConfirm = (e) => {
    setConfirm(e.target.value)
  }


  return (
    <div style={{"display": "block", "backgroundColor": "red"}}>signup
      <input placeholder='enter name' onChange={changeName} />
      <input placeholder='enter password' type="password" onChange={changePassword}/>
      <input placeholder='confirm password' type="password" onChange={changeConfirm}/>
      <button onClick={sbmt}>submit</button>
    </div>

  )
}
