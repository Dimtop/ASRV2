import React, {useState,useEffect} from 'react'

//Components
import MeasurementErrorReport from './measurementErrorReport'

export default function FlowmeterVolumeRateOfChangeReport(props){


    useEffect(()=>{

    },[props.inspection])
    console.log(props.inspection)
    return (
        props.inspection.measurements?
        <div style={{backgroundColor:"white"}}>
         <h5 style={{color:'black'}}>{props.paragraph.replaceAll("_",".") + " Άλλες διατάξεις μέτρησης (ροόμετρα και αισθητήρες ταχύτητας για τον έλεγχο του ρυθμού μεταβολής όγκου/επιφάνεια)"}</h5>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"}}>
 
        <div style={{padding:"1rem",border:"2px solid black",margin:"1rem"}}>
                <p style={{color:'black'}}><b>50% ακροφυσίων</b></p>
                <p style={{color:'black'}}><b>Πίεση: </b>{props.inspection.measurements[props.paragraph].values[0].p1}</p>
                <p style={{color:'black'}}><b>Ένδειξη ροομέτρου: </b>{props.inspection.measurements[props.paragraph].values[0].q}</p>
            </div>
          
            <div style={{padding:"1rem",border:"2px solid black",margin:"1rem"}}>
                <p style={{color:'black'}}><b>75% ακροφυσίων</b></p>
                <p style={{color:'black'}}><b>Πίεση: </b>{props.inspection.measurements[props.paragraph].values[1].p1}</p>
                <p style={{color:'black'}}><b>Ένδειξη ροομέτρου: </b>{props.inspection.measurements[props.paragraph].values[1].q}</p>
            </div>

            <div style={{padding:"1rem",border:"2px solid black",margin:"1rem"}}>
                <p style={{color:'black'}}><b>100% ακροφυσίων</b></p>
                <p style={{color:'black'}}><b>Πίεση: </b>{props.inspection.measurements[props.paragraph].values[2].p1}</p>
                <p style={{color:'black'}}><b>Ένδειξη ροομέτρου: </b>{props.inspection.measurements[props.paragraph].values[2].q}</p>
            </div>
        </div>
        
        <MeasurementErrorReport measurement={props.inspection.measurements[props.paragraph]}/> 
           
           
        </div>
        :
        <></>
    )
}