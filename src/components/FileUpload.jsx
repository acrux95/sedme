import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import '../assets/styles/components/Profile.scss';

import profilePhoto from '../assets/static/profilephoto.png';

firebase.initializeApp({
  apiKey: "AIzaSyAEK43gEqnlkHFQp8yAo3Jt7PbXfZkgx_E",
  authDomain: "sedme-f1392.firebaseapp.com",
  databaseURL: "https://sedme-f1392.firebaseio.com",
  projectId: "sedme-f1392",
  storageBucket: "sedme-f1392.appspot.com",
  messagingSenderId: "449534761471",
  appId: "1:449534761471:web:4d9ab4e76952debff36fca",
  measurementId: "G-N9T4L6DV6P"
});
firebase.auth().signInAnonymously()
.catch(function(error) {
 // Handle errors
});

class FileUpload extends Component {
    
    constructor () {
        super();
        this.state = {
            uploadValue: 0,
            picture: profilePhoto
        };
        this.handleUpload = this.handleUpload.bind(this);
    }
    
    handleUpload (event) {

        const file = event.target.files[0];
        const storageRef = firebase.storage().ref(`/upload/${file.name}`);
        const task = storageRef.put(file);
        const location = `http://sedme-f1392.appspot.com/${storageRef.location.path_}`
        console.log(location)
        // console.log(storageRef.location.bucket)
        // console.log(storageRef.location.path_)
        task.on('state_changed', (snapshot) => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.setState({
                uploadValue: percentage
            }) 
        }, error => {
            console.log(error.message)
        }, () => {
            this.setState({
                uploadValue: 100,
                picture: task.snapshot.getMetadata.downloadURL
            });
        });
        
    }
    

render () {
    return (
        <div>
            <img  className="perfilPhoto"  src={this.state.picture} alt="Profile Image"/>
            <br/>
            <input type="file" onChange={this.handleUpload} className="uploadButton"/>
            <br/>
            <progress value={this.state.uploadValue}></progress>
            <br/>
        </div>
        )
    }
}

export default FileUpload;