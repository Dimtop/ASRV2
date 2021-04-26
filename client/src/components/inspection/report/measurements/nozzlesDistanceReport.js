import React, {useState,useEffect} from 'react'

//Components
import MeasurementErrorReport from './measurementErrorReport'

export default function NozzlesDistanceReport(props){


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
                        <p style={{color:'black'}}><b>{"Απόσταση ακροφυσίων μπεκ " + (i+1).toString() +" - " + (i+2).toString() +": "}</b>{e}</p>
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