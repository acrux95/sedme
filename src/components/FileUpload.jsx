import React, { Component } from 'react';
import firebase from 'firebase';

import '../assets/styles/components/Profile.scss';

import profilePhoto from '../assets/static/profilephoto.png';


class FileUpload extends Component {
    
    constructor () {
        super();
        this.state = {
            uploadValue: 0,
            picture: null
        };
        this.handleUpload = this.handleUpload.bind(this);
    }
    
    handleUpload (event) {
        firebase.auth().signInAnonymously()
        .catch(function(error) {
         // Handle errors
        });
        const file = event.target.files[0];
        const storageRef = firebase.storage().ref(`/upload/${file.name}`);
        const task = storageRef.put(file);

        task.on('state_changed', snapshot => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.setState({
                uploadValue: percentage
            }) 
        }, error => {
            console.log(error.message)
        },() => {
            this.setState({
                uploadValue: 100,
                picture: task.snapshot.downloadURL
            });
        });
    }

render () {
    return (
        <div>
            <progress value={this.state.uploadValue}></progress>
            <br/>
            <input type="file" onChange={this.handleUpload}/>
            <br/>
            <img className="perfilPhoto" src={this.state.picture} alt="Profile Image"/>
            {/* {this.props.onUpload} */}
        </div>
        )
    }
}

export default FileUpload;