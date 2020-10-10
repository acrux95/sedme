import React, { Component } from 'react';
import firebase from 'firebase';

import '../assets/styles/components/Profile.scss';

import profilePhoto from '../assets/static/profilephoto.png';

class FileUpload extends Component {
    constructor () {
        super();
        this.state = {
            uploadValue: 0,
            picture
        }
    }

render () {
    return (
        <div>
            <progress value={this.state.uploadValue}></progress>
            <br/>
            <input type="file" onChange={this.props.onUpload}/>
            <br/>
            <img className="perfilPhoto" src={this.props.onUpload} alt="Profile Image"/>
        </div>
        )
    }
}

export default FileUpload;