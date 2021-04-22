//2.2
import React, {useState,useEffect} from 'react';

//Components

import {Panel, Col,Input,InputNumber} from 'rsuite';


export default function PumpVibrations(props){

    const [error,setError] = useState("")

    return(
        <>

            <Panel bordered header={props.paragraph.replaceAll("_",".") +  "  Δονήσεις (παλμοί) αντλίας"} className="withMargin">
                <p>Μ.Ο. Μετρήσεων</p>
                <Input type="number" value={props.inspection.measurements[props.paragraph].avg} onChange={value=>{
                                                console.log("INSPECTION MEAS")
                                                
                                                console.log(({
                                                    ...props.inspection,
                                                    measurements:{
                                                        ...props.inspection.measurements,
                                                        [props.paragraph]:{
                                                            ...props.inspection.measurements[props.paragraph],
                                                            avg:Number(value),
                                                            result:calculateResult(Number(value),props.sprayer.maxPressure)
                                                        }
                                                    }
                                                }))
                                                props.setInspection({
                                                    ...props.inspection,
                                                    measurements:{
                                                        ...props.inspection.measurements,
                                                        [props.paragraph]:{
                                                            ...props.inspection.measurements[props.paragraph],
                                                            avg:Number(value),
                                                            result:calculateResult(Number(value),props.sprayer)
                                                        }
                                                    }
                                                })
                                            }
                                          
                
                    }
                />
                <p>{error}</p>
            </Panel>
            
        </>
    )
}

function calculateResult(value,sprayer){
    var ref = sprayer.maxPressure * 0.1;

    console.log(ref)
    console.log(value)
    if(value<=ref){
        return true;
    }
    return false;
}