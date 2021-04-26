import React, {useState,useEffect} from 'react'

//Components
import MeasurementErrorReport from './measurementErrorReport'

export default function ArmSymmetryReport(props){


    useEffect(()=>{

    },[props.inspection])
    console.log(props.inspection)
    return (
        props.inspection.measurements?
        <div style={{backgroundColor:"white"}}>
         <h5 style={{color:'black'}}>{props.paragraph.replaceAll("_",".") + " Συμμετρία βραχίονα"}</h5>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"}}>
 
            <div style={{padding:"1rem",border:"2px solid black",margin:"1rem"}}>
    
                <p style={{color:'black'}}><b>Μήκος 1ου μισού: </b>{props.inspection.measurements[props.paragraph].values[0]}</p>
               
            </div>
            <div style={{padding:"1rem",border:"2px solid black",margin:"1rem"}}>
    
                <p style={{color:'black'}}><b>Μήκος 2ου μισού: </b>{props.inspection.measurements[props.paragraph].values[1]}</p>
               
            </div>
          
        </div>
        <MeasurementErrorReport measurement={props.inspection.measurements[props.paragraph]}/>
           
           
           
        </div>
        :
        <></>
    )
}