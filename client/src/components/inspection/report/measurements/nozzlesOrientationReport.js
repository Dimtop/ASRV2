import React, {useState,useEffect} from 'react'

//Components
import MeasurementErrorReport from './measurementErrorReport'

export default function NozzlesOrientationReport(props){


    useEffect(()=>{

    },[props.inspection,props.sprayer])
    console.log(props.inspection)
    return (
        props.inspection.measurements?
        <div style={{backgroundColor:"white"}}>
         <h5 style={{color:'black'}}>{props.paragraph.replaceAll("_",".") + " Προσανατολισμός ακροφυσίων /κατακόρυφη θέση σώματος ακροφυσίων"}</h5>
       
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"}}>
            {
                props.inspection.measurements[props.paragraph].values.map((e,i)=>{
                    return(
                        <div style={{padding:"1rem",border:"2px solid black",margin:"1rem"}}>

                            <p style={{color:'black'}}><b>{"Προσανατολισμός ακροφυσίων μπεκ " + (i+1).toString()+": "} </b>{e==1?"Κατακόρυφος προσανατολισμός":"Μη κατακόρυφος προσανατολισμός"}</p>
               
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