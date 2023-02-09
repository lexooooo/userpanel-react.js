import React from "react";
import axios from "axios";

class EditImgButton extends React.Component {
 
    constructor (props) {
     
        super(props)


        this.state = {
           _object: null,
           _currentImage: null
        }

    }


    spawn = () => {
        this.setState({
            _object: <><input onChange={this.changer} type="file" key="image"/><button onClick={this.uploadImg}>Upload</button>
            <button onClick={() => {this.setState({_object: null})}}>close</button></>
        },
        () => {
        return console.log("done");
        } 
        )
    }

    changer = (e) => {
        e.preventDefault()
        this.setState({_currentImage: e.target.files[0]}, console.log())
    }

    uploadImg = (e) => {
        e.preventDefault()
        if (this.state._currentImage.length !== null) {
          const config = {headers: {"Content-Type": "multipart/form-data", authorization: `bearer ${sessionStorage.getItem("JWT")}`}}
          axios.post('http://localhost:3001/imageupload', {image: this.state._currentImage, name: this.props.className}, config)
          .then(res => {if (res) window.location.reload()})        
        } else if (this.state._currentImage = null) {
          return false
        }
    }


    render () {
        return (
            <>
                <button onClick={this.spawn}>{this.props.name}</button>
                {this.state._object}
            </>
        )
    }
}

export default EditImgButton