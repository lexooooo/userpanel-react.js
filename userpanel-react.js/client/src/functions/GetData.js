import React from 'react'
import axios from 'axios';
import { logout } from './functions';



export const GetUserData = async (sessionData, sN, sA, sG, sR, sI) => {
    axios.post("http://localhost:3001/register/getuserdata", {sessionData})
    .then(res => {
     sN(`${res.data.username}`);
     sA(`${res.data.age}`);
     sG(`${res.data.gender}`);
     sR(`${res.data.role}`);
     sI(`${res.data.image}`);
    })
    .catch(err => {
     if (err) {
     logout();
     }
     })
    }