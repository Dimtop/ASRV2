//8.4.2
import React, {useState,useEffect} from 'react';

//Components

import {Panel,Grid,Row, Col,Input,InputNumber} from 'rsuite';


export default function ArmDistanceHorizontal(props){

    const [error,setError] = useState("")

    return(
        <>

            <Panel bordered header={props.paragraph.replaceAll("_",".") + " Οριζόντια θέση (κάμψη βραχίοντα στο οριζόντιο επίπεδο)"} className="withMargin">

                <Grid fluid>
                    <Row>
                        <Col xs={24} md={24}>
                            <p>Μέτρηση κάμψης</p>
                            <Input type="number" value={props.inspection.measurements[props.paragraph].value} onChange={value=>{
                                                console.log("INSPECTION MEAS")
                                                
                                                console.log(({
                                                    ...props.inspection,
                                                    measurements:{
                                                        ...props.inspection.measurements,
                                                        [props.paragraph]:{
                                                            value:Number(value),
                                                            result:calculateResult(Number(value),props.sprayer)
                                                        }
                                                    }
                                                }))
                                                props.setInspection({
                                                    ...props.inspection,
                                                    measurements:{
                                                        ...props.inspection.measurements,
                                                        [props.paragraph]:{
                                                            value:Number(value),
                                                            result:calculateResult(Number(value),props.sprayer)
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


function calculateResult(value,sprayer){
    var refMin = sprayer.totalArmLength - 0.025 * sprayer.totalArmLength;
    var refMax = sprayer.totalArmLength + 0.025 * sprayer.totalArmLength;

    if(value<=refMin || value>=refMax){
        return false;
    }
    return true;
}