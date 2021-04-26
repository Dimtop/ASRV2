import React, {useState,useEffect} from 'react'
//Components
import MeasurementErrorReport from './measurementErrorReport'


export default function PressureDistributionReport(props){


    useEffect(()=>{

    },[props.inspection])
    console.log(props.inspection)
    return (
        props.inspection.measurements?
        <div style={{backgroundColor:"white"}}>
             <h5 style={{color:'black'}}>{props.paragraph.replaceAll("_",".") + " Κατανομή πίεσης"}</h5>
             <p style={{color:'black'}}>{"Υπολογίζεται αυτόματα από τις τιμές της παραγράφου " + props.refParagraph.replaceAll("_",".") + " και την δηλωμένη μέγιστη πίεση ψεκαστικού"}</p>
             <MeasurementErrorReport measurement={props.inspection.measurements[props.paragraph]}/>
        </div>
        :
        <></>
       
    )
}