import React from 'react';
import profilePic from './default-fem-profile.svg';
import homeButton from './home-button.png'

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
                    <img src={homeButton} className="home-button"></img>
                </div>
            </div>
        )
    }
}

export default HeaderEduPoints;