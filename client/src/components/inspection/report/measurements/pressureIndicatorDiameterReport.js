import React, {useState,useEffect} from 'react'

//Components
import MeasurementErrorReport from './measurementErrorReport'

export default function PressureIndicatorDiameterReport(props){


    useEffect(()=>{

    },[props.inspection,props.sprayer])
    console.log(props.inspection)
    return (
        props.inspection.measurements?
        <div style={{backgroundColor:"white"}}>
         <h5 style={{color:'black',pageBreakAfter:"avoid"}}>{props.paragraph.replaceAll("_",".") + " Διάμετρος μετρητή πίεσης"}</h5>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"}}>
 
            <div style={{padding:"1rem",border:"2px solid black",margin:"1rem"}}>

                <p style={{color:'black'}}><b>Μ.Ο. Μετρήσεων: </b>{props.inspection.measurements[props.paragraph].avg}</p>
               
            </div>
   
        </div>
        
        <MeasurementErrorReport measurement={props.inspection.measurements[props.paragraph]}/>
           
           
        </div>
        :
        <></>
    )
}