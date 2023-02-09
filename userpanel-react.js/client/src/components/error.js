import React from 'react'
 
export const pageReload = () => {
    window.location.reload()
  }

export  function dontMatch() {
        alert ("password dont match\n window will be reloaded")
        pageReload()
        }

export  function noRes() {
        alert ("NO response\n window will be reloaded")
        pageReload()
        }


         

