import React from 'react'
import puce from './puce 1.png';
import visa from './visa.jpeg';


const CreditCart = (props) => {
    return (

        <div className='card'>
           
            <h1 class="grand-titre"> CREDIT CARD </h1>
            <img className="puce" src={puce}/> 

            <div className="container">

                <div className="column">
                   
                    <p className="num-1"  >{props.zonetext.num ==="" ? "**** **** **** ****" : props.zonetext.num.padEnd(16,"*").replace(/\d{4}(?=.)/g, '$& ') } </p>
                    <p className="t-date">MONTH/YEAR</p>

                    <div className="l-2-horizontal">
                        <p className="n-date">5422</p>

                        <div className="box-right">
                            <p className="validation">VALID<br />THRU</p>
                            <i class="fas fa-caret-right" ></i>
                           
                            <p className="n-date"   >  {props.zonetext.dat ==="" ? "**/**" : props.zonetext.dat.slice(0, 2) + "/" + props.zonetext.dat.slice(2, 4)  } </p>
                        </div>

                    </div>
                   
                    <p className="sous-titre"  > {props.zonetext.text ==="" ? "**********" : props.zonetext.text} </p>

                </div>

                <img className="visa" src={visa}></img>

            </div>
            

        </div>

    )
}

export default CreditCart