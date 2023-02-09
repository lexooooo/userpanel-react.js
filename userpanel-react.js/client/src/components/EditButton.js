import React from 'react'
import '../App.css'
import axios from 'axios'

class EditButton extends React.Component {
 
    constructor (props) {
      
        super(props)

        this.state = {
         obj: null,
         _value: ""
        }

    }

    increment () {
         if (this.state.obj == null) {
         this.setState({
         obj: <><input placeholder = "enter here" onChange={this.change}/> <button onClick={this.getValues}>submit</button></>
         }, () => {
         })
         } else {
         this.setState({obj: null})
         }
    }

    change = (e) => {
       this.setState({ _value: e.target.value}, () => {
       })
    }

    getValues = () => {
        switch (this.props.name) {
            case "role": if (this.state._value.match("^[a-z].*", "i")) {
                                axios.post("http://localhost:3001/register/editany",
                                {sessionData: sessionStorage.getItem("JWT"), role: this.state._value})
                                .then((res) => {if (res) window.location.reload()})
                                console.log("succssess")
                            }
                            else {
                                alert("input musc contin only letters")
                            }
                break;
            case "age":  if (this.state._value.match("^[0-9]")) {
                                axios.post("http://localhost:3001/register/editany",
                                {sessionData: sessionStorage.getItem("JWT"), age: this.state._value})
                                .then((res) => {if (res) window.location.reload()})
                                console.log("succssess")
                                }
                            else {
                                alert("input musc contin only numbers")
                            }
                break;
            case "gender": if (this.state._value.match("^[a-z].*", "i")) {
                                axios.post("http://localhost:3001/register/editany",
                                {sessionData: sessionStorage.getItem("JWT"), gender: this.state._value})
                                .then((res) => {if (res) window.location.reload()})
                                console.log("succssess")
                                }
                            else {
                                alert("input musc contin only letters")
                            } 
                break;      
            default:
                break;
        }
    }
    
    render () {
        return  (
        <>
        {this.state.obj}
        <button onClick={(e) => {this.increment(); e.target.innerHTML = e.target.innerHTML == "edit" ? "close" : "edit"}}>edit</button>
        </>
        )
    }
}


export default EditButton
