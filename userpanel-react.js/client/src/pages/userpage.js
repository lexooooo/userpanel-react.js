import React, {useRef, useState} from 'react'
import '../App.css'
import { logout } from '../functions/functions';
import { GetUserData } from '../functions/GetData';
import EditButton from '../components/EditButton'
import EditImgButton from '../components/imgEditBtn';



export default function Userpage() {


  var sessionData;

  
  const [name, setName] = useState('')
  const [age, setAge] = useState(Number)
  const [gender, setGender] = useState("")
  const [role, setRole] = useState("")
  const [image, setImage] = useState("")


  if (sessionStorage.getItem("JWT")) {
   sessionData = sessionStorage.getItem("JWT")
  }

  GetUserData(sessionStorage.getItem('JWT'), setName, setAge, setGender, setRole, setImage)
  
  const im = `${name}/${image}`.replace(" ", "");
  const imagePlace = <div className='imgHolder'>
                     <img src={image.length > 0 ? require( '../uploads/'+{im}.im) 
                     : require( '../defaultpicture/FlagWave.anim.gif')} alt='image'/>
                     </div>
  
  // image.length > 1 ? require( '../uploads/' + {im}.im) : null

  return (
    <div>userpage
      <ul className='userInfo'>

        <li id='usern'>username:<span>{name}</span></li>

        <li id='role'>role: <span>{role}</span>   <EditButton name = "role"/> </li>

        <li id='age'>age: <span>{age}</span>       <EditButton name = "age"/></li>

        <li id="gen">gender: <span>{gender}</span> <EditButton name = "gender"/></li>

        <li>
          {/*  PROFILE PICTURE  */}
          {image.length > 0 ? imagePlace : null}
          <EditImgButton className = {name} name="Upload Image"/>
        </li>

        <br/>
        <br/>

        <button className='logout' onClick={logout}>Log Out</button>
        
      </ul>
    </div>
  )
}
