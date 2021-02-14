import React from 'react';
import './edupoints.css'
import HeaderEduPoints from './header-edupoints.js'
import BodyEduPoints from './body-edupoints.js'

class EduPoints extends React.Component{

    constructor(props){
        super(props);

        let balance = 17500;
        let savings = 20000;
        this.acc_name = "Angelica";

        this.acc_balance = this.formatMoney(balance,0);
        this.acc_savings = this.formatMoney(savings,0);
    }

    formatMoney(number, decPlaces, decSep, thouSep) {
        decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces;
        decSep = typeof decSep === "undefined" ? "." : decSep;
        thouSep = typeof thouSep === "undefined" ? "," : thouSep;
        var sign = number < 0 ? "-" : "";
        var i = String(parseInt(number = Math.abs(Number(number) || 0).toFixed(decPlaces)));
        var j = (j = i.length) > 3 ? j % 3 : 0;
        
        return sign +
            (j ? i.substr(0, j) + thouSep : "") +
            i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) +
            (decPlaces ? decSep + Math.abs(number - i).toFixed(decPlaces).slice(2) : "");
    }

    
    

    render(){ // TODO: Hook Firebase to request user name
        return(
            <div className="root">    
                <HeaderEduPoints name={this.acc_name.toUpperCase()} balance={this.acc_balance}></HeaderEduPoints>
                <BodyEduPoints balance={this.acc_balance} savings={"$"+this.acc_savings}></BodyEduPoints>
            </div>
        )
    }
}

export default EduPoints;