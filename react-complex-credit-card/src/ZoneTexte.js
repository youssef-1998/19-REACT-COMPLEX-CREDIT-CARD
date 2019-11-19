import React, { Component } from 'react';
import CreditCart from './CreditCart'


class ZoneText extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num: "",
            dat: "",
            text: "",

            validN: {
                statusN: true,
                messageN: ""
            },

            validD: {
                statusD: true,
                messageD: ""
            },

            validT: {
                statusT: true,
                messageT: ""
            }
        }

        this.FNchangeinputNUM = this.FNchangeinputNUM.bind(this);
        this.FNchangeinputDAT = this.FNchangeinputDAT.bind(this);
        this.FNchangeinputnumTEXT = this.FNchangeinputnumTEXT.bind(this);
    }
    /************************************** handlechange  *********************************/
    FNchangeinputNUM = (e) => {
        var numVali = /[^0-9]+/g;
        if (e.target.value.match(numVali)) {
            this.setState({ validN: { status: false, messageN: "Tape only number" } });
        } else if (e.target.value.length > 16) {
            this.setState({ validN: { statusN: false, messageN: "Max length 16" } });
        } else {
            this.setState({
                num: e.target.value,
                validN: { statusN: true, messageN: "" }
            });
        }
    }   
    FNchangeinputDAT = (e) => {
        var datVali = /[^0-9]+/g;
        if (e.target.value.match(datVali)) {
            this.setState({ validD: { status: false, messageD: "Tape only number" } });
        } else if (e.target.value.length > 4) {
            this.setState({ validN: { statusD: false, messageD: "Max length 5" } });
        } else {
            this.setState({
                dat: e.target.value,
                validD: { statusD: true, messageD: "" }
            });
        }
    }
    FNchangeinputnumTEXT = (e) => {
        var textValid = /[^A-Z]+/g;
        if (e.target.value.match(textValid)) {
            this.setState({ validT: { statusT: false, messageT: "Tape only lter uppercase" } });
        } else if (e.target.value.length > 8) {
            this.setState({ validT: { statusT: false, messageT: "Max length 8" } });
        } else {
            this.setState({
                text: e.target.value,
                validT: { statusT: true, messageT: "" }
            });
        }
    }
    /***************************************************************************************/

    render() {
        const { validN,validD,validT } = this.state;
        return (

            <div className="all-input">

                <CreditCart zonetext={this.state} />
                <div>
                    < input className="exterieur-input" type="text" placeholder="  code" onChange={this.FNchangeinputNUM} value={this.state.num} ></input >
                       
                    {!validN.statusN ? ( <span style={{ color: "#ff0000" }}> {validN.messageN} </span> ) : null }
                    
                    < input className="exterieur-input" type="text" placeholder="  validity" onChange={this.FNchangeinputDAT} value={this.state.dat} ></input >

                    {!validD.statusD ? ( <span style={{ color: "#ff0000" }}> {validD.messageD} </span> ) : null }

                    < input className="exterieur-input" type="text" placeholder="  owner name" onChange={this.FNchangeinputnumTEXT} value={this.state.text} ></input >

                    {!validT.statusT ? ( <span style={{ color: "#ff0000" }}> {validT.messageT} </span> ) : null }

                </div>

            </div>

        )
    }
}

export default ZoneText