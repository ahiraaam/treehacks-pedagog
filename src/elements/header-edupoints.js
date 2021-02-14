import React from 'react';
import profilePic from './images/default-fem-profile.svg';
import homeButton from './images/home-button.png'

class ProfileName extends React.Component{
    render(){
        return(
            <div className="text-container-profile">
                WELCOME {this.props.name}
            </div>
        );
    }
           
}

class HeaderEduPoints extends React.Component{

    // TODO
    go_back(){
        alert('Hello world!');
    }

    render(){
        return(
            <div className="header-main">
                <div className="profile-view">
                    <img className="profile-pic" src={profilePic}></img>
                    <ProfileName name={this.props.name} />
                </div>
                <div className="balance-board">
                    <div className="balance-heading">
                        EDUPOINTS BALANCE:
                    </div>
                    <div className="balance-display">
                        {this.props.balance}
                    </div>
                    <img src={homeButton} className="home-button" onClick={this.go_back}></img>
                </div>
            </div>
        )
    }
}

export default HeaderEduPoints;