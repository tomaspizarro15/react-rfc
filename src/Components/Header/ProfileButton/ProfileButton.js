import React from 'react';
import profileLogo from './icons8-male-user-96.png';
const profileButton = (props) => {

    const counter = 1; 
    let notification = 'profile_nots';

    if(counter !== 0) {
        notification = 'profile_nots active'
    };

    return (
       
        <React.Fragment>
            <div className="profile_icon">
                <img alt="profile_icon" src={profileLogo}></img>
            </div>
            <div className= {notification}>
                <p>{counter}</p>
            </div>
        </React.Fragment>
    );

}
export default profileButton