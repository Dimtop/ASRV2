import React, {useState,useEffect} from 'react'

//Components
import MeasurementErrorReport from './measurementErrorReport'

export default function NozzlesSupplyReport(props){


    useEffect(()=>{

    },[props.inspection,props.sprayer])
    console.log(props.inspection)
    return (
        props.inspection.measurements?
        <div style={{backgroundColor:"white"}}>
         <h5 style={{color:'black'}}>{props.paragraph.replaceAll("_",".") + " Παροχή ακροφυσίων"}</h5>
       
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"}}>
            {
                props.inspection.measurements[props.paragraph].values.map((injector,injectorIndex)=>{
                    return(
                        <div style={{padding:"1rem",border:"2px solid black",margin:"1rem"}}>

                                <p style={{color:'black'}}><b>{"Μπεκ " + (injectorIndex+1).toString()}</b></p>
                                {
                                    injector.map((nozzle,nozzleIndex)=>{
                                        return <p style={{color:'black'}}><b>{"Παροχή ακροφυσίου " + (nozzleIndex+1).toString()+": "}</b>{nozzle}</p>
                                    })
                                } 

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