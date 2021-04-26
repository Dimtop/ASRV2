//5.4.1
import React, {useState,useEffect} from 'react';

//Components

import {Panel, Col,Input,InputNumber} from 'rsuite';


export default function PressureMaintenanceUponSprayingStop(props){

    const [error,setError] = useState("")

    return(
        <>

            <Panel bordered header={props.paragraph.replaceAll("_",".")  + " Διατήρηση πίεσης κατόπιν παύσης και επανέναρξης  ψεκασμού"} className="withMargin">
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
                                                            result:calculateResult(Number(value),props.sprayer)
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
                                          
                
                    }/>
                <p>{error}</p>
            </Panel>
            
        </>
    )
}


function calculateResult(value,sprayer){
    var ref = sprayer.maxPressure*0.1;

    if(value-sprayer.maxPressure<=ref){
        return true;
    }

    return false;
}