//8.4.1
import React, {useState,useEffect} from 'react';

//Components

import {Panel,Grid,Row, Col,Input,InputNumber} from 'rsuite';


export default function ArmDistanceVertical(props){

    const [error,setError] = useState("")

    return(
        <>

            <Panel bordered header={props.paragraph.replaceAll("_",".") + " Κατακόρυφη θέση (απόσταση βραχίονα από το έδαφος)"} className="withMargin">

                <Grid fluid>
                    <Row>
                        <Col xs={24} md={12}>
                            <p>Μέτρηση υψηλότερου σημείου</p>
                            <Input type="number" value={props.inspection.measurements[props.paragraph].high} onChange={value=>{
                                                console.log("INSPECTION MEAS")
                                                
                                                console.log(({
                                                    ...props.inspection,
                                                    measurements:{
                                                        ...props.inspection.measurements,
                                                        [props.paragraph]:{
                                                            ...props.inspection.measurements[props.paragraph],
                                                            high:Number(value),
                                                            result:calculateResult(props.inspection.measurements[props.paragraph].low,Number(value),props.sprayer)
                                                        }
                                                    }
                                                }))
                                                props.setInspection({
                                                    ...props.inspection,
                                                    measurements:{
                                                        ...props.inspection.measurements,
                                                        [props.paragraph]:{
                                                            ...props.inspection.measurements[props.paragraph],
                                                            high:Number(value),
                                                            result:calculateResult(props.inspection.measurements[props.paragraph].low,Number(value),props.sprayer)
                                                        }
                                                    }
                                                })
                                            }
                                          
                
                                    }/>
                        </Col>
                        <Col xs={24} md={12}>
                            <p>Μέτρηση χαμηλότερου σημείου</p>
                            <Input type="number" value={props.inspection.measurements[props.paragraph].low}  onChange={value=>{
                                                console.log("INSPECTION MEAS")
                                                
                                                console.log(({
                                                    ...props.inspection,
                                                    measurements:{
                                                        ...props.inspection.measurements,
                                                        [props.paragraph]:{
                                                            ...props.inspection.measurements[props.paragraph],
                                                            low:Number(value),
                                                            result:calculateResult(Number(value),props.inspection.measurements[props.paragraph].high,props.sprayer)
                                                        }
                                                    }
                                                }))
                                                props.setInspection({
                                                    ...props.inspection,
                                                    measurements:{
                                                        ...props.inspection.measurements,
                                                        [props.paragraph]:{
                                                            ...props.inspection.measurements[props.paragraph],
                                                            low:Number(value),
                                                            result:calculateResult(Number(value),props.inspection.measurements[props.paragraph].high,props.sprayer)
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


function calculateResult(low,high,sprayer){
    var ref = 0.5/100 * sprayer.totalArmLength;

    if(high-low >= ref){
        return false;
    }
    return true;
}