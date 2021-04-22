//5.2.4
import React, {useState,useEffect} from 'react';

//Components

import {Panel, Col,Input,InputNumber} from 'rsuite';


export default function PressureIndicatorDiameter(props){

    const [error,setError] = useState("")



    return(
        <>

            <Panel bordered header={props.paragraph.replaceAll("_",".") + "Διάμετρος μετρητή πίεσης"} className="withMargin">
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
                                                            result:calculateResult(Number(value))
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
                                                            result:calculateResult(Number(value))
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



function calculateResult(value){
    if(value>63){
        return true
    }
    return false;
}