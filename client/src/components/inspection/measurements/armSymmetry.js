//8.1.2
import React, {useState,useEffect} from 'react';

//Components

import {Panel,Grid,Row, Col,Input,InputNumber} from 'rsuite';


export default function ArmSymmetry(props){

    const [error,setError] = useState("")

    useEffect(()=>{

    },[props.inspection])
    return(
        <>

            <Panel bordered header={props.paragraph.replaceAll("_",".") + " Συμμετρία βραχίονα"} className="withMargin">
                <Grid fluid>
                    <Row>
                        <Col xs={12}>
                            <p>Μήκος 1ου μισού</p>
                            <Input type="number" value={props.inspection.measurements[props.paragraph].values[0]} onChange={value=>{
                                                var values=[Number(value),props.inspection.measurements[props.paragraph].values[1]];
                                                console.log("INSPECTION MEAS")
                                                
                                                console.log(({
                                                    ...props.inspection,
                                                    measurements:{
                                                        ...props.inspection.measurements,
                                                        [props.paragraph]:{
                                                            values:values,
                                                            result:calculateResult(values)
                                                        }
                                                    }
                                                }))
                                                props.setInspection({
                                                    ...props.inspection,
                                                    measurements:{
                                                        ...props.inspection.measurements,
                                                        [props.paragraph]:{
                                                            values:values,
                                                            result:calculateResult(values)
                                                        }
                                                    }
                                                })
                                            }
                                          
                
                    }/>
                        </Col>
                        <Col xs={12}>
                            <p>Μήκος 2ου μισού</p>
                            <Input type="number" value={props.inspection.measurements[props.paragraph].values[1]} onChange={value=>{
                                                var values=[props.inspection.measurements[props.paragraph].values[0],Number(value)];
                                                console.log("INSPECTION MEAS")
                                                
                                                console.log(({
                                                    ...props.inspection,
                                                    measurements:{
                                                        ...props.inspection.measurements,
                                                        [props.paragraph]:{
                                                            values:values,
                                                            result:calculateResult(values)
                                                        }
                                                    }
                                                }))
                                                props.setInspection({
                                                    ...props.inspection,
                                                    measurements:{
                                                        ...props.inspection.measurements,
                                                        [props.paragraph]:{
                                                            values:values,
                                                            result:calculateResult(values)
                                                        }
                                                    }
                                                })
                                            }
                                          
                
                    }/>
                        </Col>
                    </Row>

                </Grid>
           
                <p>{error}</p>
            </Panel>
            
        </>
    )
}


function calculateResult(values){
    if(values[0]!=values[1]){
        return false;
    }
    return true;
}
