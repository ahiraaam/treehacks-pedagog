import React from 'react';
import './edupoints.css'
import padlock from './images/padlock.png'

class TextContainerBody extends React.Component{
    render(){
        return(
            <div className="text-container-body">
                {this.props.name}
                <div className="balance-body">
                    {this.props.balance}
                </div>
            </div>
        );
    }
}

class TextContainerBodyInfo extends React.Component{
    render(){
        return(
            <div className="text-container-body-info">
                {this.props.name}
            </div>
        );
    }
}

class BodyEduPoints extends React.Component{

    // TODO
    alert_pop(){
        alert('Hello world!');
    }

    render(){
        return(
            <div className="main-container">
                <div className="edupoints-container">
                    <TextContainerBody name="EDUPOINTS BALANCE:" balance={this.props.balance}/>
                </div>
                <div className="edupoints-container">
                    <TextContainerBody name="SAVINGS:" balance={this.props.savings}/>
                    <div className="generic-button" onClick={this.alert_pop}>
                        add
                    </div>
                </div>
                <div className="edupoints-container">
                    <img src={padlock} className="image-inside">
                    </img>
                    <TextContainerBodyInfo name="FINANCIAL AID"/>
                    <div className="description">
                    Once you turn 18 you will be elegible to apply for financial aid with us. Meanwhile you can <span className="strong">do this actions</span> to guarantee you will get the funding you require.
                    </div>
                </div>
            </div>
        );
    }
}

export default BodyEduPoints;