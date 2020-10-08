import React from 'react';
import swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Profile.scss';
import Layout from '../components/Layout';
import profilePhoto from '../assets/static/profilephoto.png';

const Profile = () => {
    
  return (
    <>
      <Layout>
            <div className="main">
                <section className="photoSection">
                    <h3>Photo</h3>
                    <img src={profilePhoto} alt="Profile Photo" className="perfilPhoto"/>
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
                    <textarea type="text" className="biographyInput" placeholder="Platzi Master Actually Student..."></textarea>
                    <div className="buttonSave">
                        <button className="saveChanges">Save</button>
                    </div>
                </div>
            </div>
        </Layout>
    </>
  );
};

export default Profile;