import React, {useState} from 'react'
import axios from 'axios'
import { noRes, dontMatch } from '../components/error'


export default function Signin() {
  
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  
  const onChU = (e) => {
   setUsername(e.target.value)
  }
  const onChP = (ev) => {
   setPassword(ev.target.value)
  }

  const signin = () => {
   axios.post('http://localhost:3001/register/signin', {username: username, password: password})
   .then(res => {
    if (res) {
     alert(res.data.message);
     sessionStorage.setItem("JWT", res.data.token)
     window.location.reload()
    }
   })
  }

  return (
    <div style={{"backgroundColor": "orange"}}>signin
      <input placeholder='enter name' onChange={onChU}/>
      <input placeholder='enter password' type="password" onChange={onChP}/>
      <button onClick={signin}>SignIn</button>
    </div>
  )
}
