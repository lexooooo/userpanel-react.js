import React from 'react'
import axios from 'axios';

export async function logout() {
    sessionStorage.removeItem("JWT");
    alert('logged out');
    window.location.reload() 
}


