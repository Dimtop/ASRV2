import React, {useState,useEffect} from 'react'

//Components
import MeasurementErrorReport from './measurementErrorReport'

export default function PressureIndicatorPrecisionReport(props){

    const [refs,setRefs] =useState([0,0,0])
    useEffect(()=>{

        if(props.sprayer.maxPressure > 10){
            setRefs([props.sprayer.maxPressure-5,props.sprayer.maxPressure,props.sprayer.maxPressure+5])
           
        }
        else{
            setRefs([props.sprayer.maxPressure-2,props.sprayer.maxPressure,props.sprayer.maxPressure+2])
        }

    },[props.inspection,props.sprayer])
    console.log(props.inspection)
    return (
        props.inspection.measurements?
        <div style={{backgroundColor:"white"}}>
         <h5 style={{color:'black'}}>{props.paragraph.replaceAll("_",".") + " Ακρίβεια μετρητή πίεσης"}</h5>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"}}>
 
            <div style={{padding:"1rem",border:"2px solid black",margin:"1rem"}}>
                <p style={{color:'black'}}><b>{"Πίεση αναφοράς: " + refs[0]}</b></p>
                <p style={{color:'black'}}><b>Μέσος όρος μετρήσεων: </b>{props.inspection.measurements[props.paragraph].values[0]}</p>
               
            </div>
            <div style={{padding:"1rem",border:"2px solid black",margin:"1rem"}}>
                <p style={{color:'black'}}><b>{"Πίεση αναφοράς: " + refs[1]}</b></p>
                <p style={{color:'black'}}><b>Μέσος όρος μετρήσεων: </b>{props.inspection.measurements[props.paragraph].values[1]}</p>
               
            </div>
            <div style={{padding:"1rem",border:"2px solid black",margin:"1rem"}}>
                <p style={{color:'black'}}><b>{"Πίεση αναφοράς: " + refs[0]}</b></p>
                <p style={{color:'black'}}><b>Μέσος όρος μετρήσεων: </b>{props.inspection.measurements[props.paragraph].values[1]}</p>
               
            </div>
        </div>
        <MeasurementErrorReport measurement={props.inspection.measurements[props.paragraph]}/>
           
           
           
        </div>
        :
        <></>
    )
}