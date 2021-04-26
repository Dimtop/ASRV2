import React, {useState,useEffect} from 'react'

//Components
import MeasurementErrorReport from './measurementErrorReport'

export default function ArmDistanceVerticalReport(props){


    useEffect(()=>{

    },[props.inspection,props.sprayer])
    console.log(props.inspection)
    return (
        props.inspection.measurements?
        <div style={{backgroundColor:"white"}}>
         <h5 style={{color:'black'}}>{props.paragraph.replaceAll("_",".") + " Κατακόρυφη απόσταση βραχίονα από το έδαφος"}</h5>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"}}>
 
            <div style={{padding:"1rem",border:"2px solid black",margin:"1rem"}}>

                <p style={{color:'black'}}><b>Μέτρηση υψηλότερου σημείου: </b>{props.inspection.measurements[props.paragraph].high}</p>
               
            </div>
            <div style={{padding:"1rem",border:"2px solid black",margin:"1rem"}}>

                <p style={{color:'black'}}><b>Μέτρηση χαμηλότερου σημείου: </b>{props.inspection.measurements[props.paragraph].low}</p>

            </div>
        </div>
        
        <MeasurementErrorReport measurement={props.inspection.measurements[props.paragraph]}/>
           
           
        </div>
        :
        <></>
    )
}