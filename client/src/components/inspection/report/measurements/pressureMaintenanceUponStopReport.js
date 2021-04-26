import React, {useState,useEffect} from 'react'

//Components
import MeasurementErrorReport from './measurementErrorReport'

export default function PressureMaintenanceUponStopReport(props){


    useEffect(()=>{

    },[props.inspection])
    console.log(props.inspection)
    return (
        props.inspection.measurements?
        <div style={{backgroundColor:"white"}}>
         <h5 style={{color:'black'}}>{props.paragraph.replaceAll("_",".") + " Αντισταθμιστικές επιστροφές (διατήρηση πίεσης κατόπιν παύσης λειτουργίας κάθε τομέα του βραχίονα)"}</h5>
         <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"}}>
        {
            props.inspection.measurements[props.paragraph].values.map((e,i)=>{
                return(
                    <div style={{padding:"1rem",border:"2px solid black",margin:"1rem"}}>
                        <p style={{color:'black'}}><b>{"Κλάδος " + (i+1).toString()}</b></p>
                        <p style={{color:'black'}}><b>Μέτρηση: </b>{e}</p>
                    </div>
                )
            })
        }
        </div>
   
        <MeasurementErrorReport measurement={props.inspection.measurements[props.paragraph]}/>  
           
        </div>
        :
        <></>
    )
}