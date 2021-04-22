//5.2.3
import React, {useState,useEffect} from 'react';

//Components

import {Panel, Col,Input,InputNumber} from 'rsuite';


export default function PressureIndicatorPrecision(props){

    const [error,setError] = useState("")
    const [refs,setRefs] =useState([0,0,0])

    useEffect(()=>{
        if(props.sprayer.maxPressure > 10){
            setRefs([props.sprayer.maxPressure-5,props.sprayer.maxPressure,props.sprayer.maxPressure+5])
           
        }
        else{
            setRefs([props.sprayer.maxPressure-2,props.sprayer.maxPressure,props.sprayer.maxPressure+2])
        }
    },[])

    return(
        <>

            <Panel bordered header={props.paragraph.replaceAll("_",".")   + " Ακρίβεια μετρητή πίεσης"} className="withMargin">
                <Col xs={12}>
                    <p>Πίεση αναφοράς</p>
                    <Input type="number"value={refs[0]} disabled/>
                </Col>
                <Col xs={12} >
                    <p>ΜΟ Μετρήσεων</p>
                    <Input type="number" value={props.inspection.measurements[props.paragraph].values[0]}  onChange={value=>{
                                                var values = [Number(value),props.inspection.measurements[props.paragraph].values[1],props.inspection.measurements[props.paragraph].values[2]]
                                                console.log("INSPECTION MEAS")
                                                
                                                console.log(({
                                                    ...props.inspection,
                                                    measurements:{
                                                        ...props.inspection.measurements,
                                                        [props.paragraph]:{
                                                            ...props.inspection.measurements[props.paragraph],
                                                            values:values,
                                                            result:calculateResult(values,refs)
                                                        }
                                                    }
                                                }))
                                                props.setInspection({
                                                    ...props.inspection,
                                                    measurements:{
                                                        ...props.inspection.measurements,
                                                        [props.paragraph]:{
                                                            ...props.inspection.measurements[props.paragraph],
                                                            values:values,
                                                            result:calculateResult(values,refs)
                                                        }
                                                    }
                                                })
                                            }
                                          
                
                    }/>
                </Col>

                <Col xs={12}>
                    <p>Πίεση αναφοράς</p>
                    <Input type="number" value={refs[1]} disabled/>
                </Col>
                <Col xs={12} >
                    <p>ΜΟ Μετρήσεων</p>
                    <Input type="number" value={props.inspection.measurements[props.paragraph].values[1]} onChange={value=>{
                                                var values=  [props.inspection.measurements[props.paragraph].values[0],Number(value),props.inspection.measurements[props.paragraph].values[2]];
                                                console.log("INSPECTION MEAS")
                                                
                                                console.log(({
                                                    ...props.inspection,
                                                    measurements:{
                                                        ...props.inspection.measurements,
                                                        [props.paragraph]:{
                                                            ...props.inspection.measurements[props.paragraph],
                                                            values:values,
                                                            result:calculateResult(values,refs)
                                                        }
                                                    }
                                                }))
                                                props.setInspection({
                                                    ...props.inspection,
                                                    measurements:{
                                                        ...props.inspection.measurements,
                                                        [props.paragraph]:{
                                                            ...props.inspection.measurements[props.paragraph],
                                                            values:values,
                                                            result:calculateResult(values,refs)
                                                        }
                                                    }
                                                })
                                            }
                                          
                
                    }/>
                </Col>

                <Col xs={12}>
                    <p>Πίεση αναφοράς</p>
                    <Input type="number" value={refs[2]} disabled/>
                </Col>
                <Col xs={12} >
                    <p>ΜΟ Μετρήσεων</p>
                    <Input type="number" value={props.inspection.measurements[props.paragraph].values[2]} onChange={value=>{
                                                var values = [props.inspection.measurements[props.paragraph].values[0],props.inspection.measurements[props.paragraph].values[1],Number(value)]
                                                console.log("INSPECTION MEAS")
                                                
                                                console.log(({
                                                    ...props.inspection,
                                                    measurements:{
                                                        ...props.inspection.measurements,
                                                        [props.paragraph]:{
                                                            ...props.inspection.measurements[props.paragraph],
                                                            values:values,
                                                            result:calculateResult(values,refs)
                                                        }
                                                    }
                                                }))
                                                props.setInspection({
                                                    ...props.inspection,
                                                    measurements:{
                                                        ...props.inspection.measurements,
                                                        [props.paragraph]:{
                                                            ...props.inspection.measurements[props.paragraph],
                                                            values:values,
                                                            result:calculateResult(values,refs)
                                                        }
                                                    }
                                                })
                                            }
                                          
                
                    }/>
                </Col>
           
           
            </Panel>
            
        </>
    )
}


function calculateResult(values,refs){
    for(var i=0;i<values.length;i++){
        if(values[i]!=refs[i]){
            return false;
        }
    }
    return true;
}