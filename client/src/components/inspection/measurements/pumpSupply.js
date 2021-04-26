//2.1.1
import React, {useState,useEffect} from 'react';

//Components

import {Panel, Col,Input,InputNumber} from 'rsuite';


export default function PumpSupply(props){

    const [error,setError] = useState("")

    return(
        <>

            <Panel bordered header={props.paragraph.replaceAll("_",".") +  "  Ανάλυση ικανότητας παροχής αντλίας με μανόμετρο αναφοράς σε ακραίο ακροφύσιο"} className="withMargin">
                <p>Μ.Ο. Μετρήσεων</p>
                <Input type="number" value={props.inspection.measurements[props.paragraph].avg} onChange={value=>{
                                                console.log("INSPECTION MEAS")
                                                
                                                console.log(({
                                                    ...props.inspection,
                                                    measurements:{
                                                        ...props.inspection.measurements,
                                                        [props.paragraph]:{
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
    if(value>sprayer.maxPressure){
        return true;
    }
    return false;

}