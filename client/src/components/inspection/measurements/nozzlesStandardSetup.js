//9.3.1
import React, {useState,useEffect} from 'react';

//Components

import {Panel, Grid,Row,Col,Input,InputNumber} from 'rsuite';


export default function NozzlesStandardSetup(props){

    const [error,setError] = useState("")
    
    return(
        <>

            <Panel bordered header={props.paragraph.replaceAll("_",".") + " Μέτρηση επί πρότυπης διάταξης"}className="withMargin">
               <p>Δεν γίνεται</p>
            </Panel>
            
        </>
    )
}




