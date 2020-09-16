import React from 'react';
import swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Profile.scss';

const Profile = () => {
  return (
        <div className="main">
        <section className="photoSection">
            <h3>Photo</h3>
            <img src="/views/login/img/beautiful-girl-profile-caretofun.net-5.jpg" alt="Profile Photo" className="perfilPhoto"/>
            <button className="uploadButton">Upload Photo</button>
        </section>
        <section className="personalInfo">
            <h2>Personal Info</h2>
            <label className="firstName">First name: </label> 
            <input type="text" className="firstNameInput"/>
            <label className="lastName">Last Name: </label>
            <input type="text" className="lastNameInput"/>
            <label className="email">Email: </label>
            <input type="text" className="emailInput"/>
            <div className="buttonPass">
                <button className="password">Change Password</button>
            </div>
        </section>
        <div className="section biography">
            <h3>Biography</h3>
            <textarea type="text" className="biographyInput" placeholder="Actual estudiante de Platzi Master..."></textarea>
            <div className="buttonSave">
                <button className="saveChanges">Save</button>
            </div>
        </div>
        

</div>
  );
};

export default Profile;