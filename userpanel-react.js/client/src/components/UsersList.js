import React, {useEffect, useState} from "react";
import axios from "axios";


export default function UsersList() {

    const [all, setAll] = useState()

    let userCard;

    useEffect(() => {
        const poster = function () {

            axios.post("http://localhost:3001/register/getallusers")
            .then(res => {
              setAll(res.data)

            })
        
        }

        poster()
    }, [])

   
    if (typeof all == "object") {

        userCard = all.map(val => (
        <li><div className="card"><span>{val.username}</span>
        <img src={require('../uploads/'+`${val.username}/${val.image}`)} alt="image"/></div>
        </li>
        )
       )

    } 


    return ( 
        <div className="cardHolder">
          <ul>
          {userCard}
          </ul>
        </div>
    )
}