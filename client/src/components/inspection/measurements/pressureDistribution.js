//9.3.2.b
import React, {useState,useEffect} from 'react';

//Components

import {Panel, Grid,Row,Col,Input,InputNumber} from 'rsuite';


export default function PressureDistribution(props){

    const [error,setError] = useState("")

    useEffect(()=>{
        props.inspection.measurements[props.paragraph].result = calculateResult(props.inspection.measurements[props.refParagraph].values,props.sprayer)
        console.log(props.inspection)
    },[props.inspection])

    return(
        <>

            <Panel bordered header={props.paragraph.replaceAll("_",".") + " Κατανομή πίεσης"} className="withMargin">
               <p>{"Υπολογίζεται αυτόματα από τις τιμές της παραγράφου " + props.refParagraph.replaceAll("_",".") + "και την δηλωμένη μέγιστη πίεση ψεκαστικού"}</p>
            </Panel>
            
        </>
    )
}

function calculateResult(values,sprayer){
    var c = [];
    var sum =0;
    var avg = 0;
    var refMin = 0;
    var refMax = 0;
    for(var i=0;i<values.length;i++){
        c.push(values[i]/sprayer.maxPressure * 100);
    }

    for(var i=0;i<c.length;i++){
        sum+= c[i];
    }

    avg = sum/c.length;
    refMin =avg - avg*0.1;
    refMax = avg + avg*0.1;

    console.log("PRESSURE DISTRIBUTION")
    console.log(c)
    console.log(values)
    console.log(sum)
    console.log(avg)
    console.log(refMin)
    console.log(refMax)

    for(var i=0;i<values.length;i++){
        if(values[i]<refMin || values[i] > refMax){
            return false;
        }
    }

    return true;


}
