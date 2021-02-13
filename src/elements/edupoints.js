import React from 'react';
import './edupoints.css'
import HeaderEduPoints from './header-edupoints.js'
import BodyEduPoints from './body-edupoints.js'

class EduPoints extends React.Component{

    render(){ // TODO: Hook Firebase to request user name
        return(
            <div className="root">    
                <HeaderEduPoints name="ANGELICA" balance="30,000"></HeaderEduPoints>
                <BodyEduPoints></BodyEduPoints>
            </div>
        )
    }
}

export default EduPoints;