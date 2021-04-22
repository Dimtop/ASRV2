//8.9
//8,8
import React, {useState,useEffect} from 'react';

//Components

import {Panel, Grid,Row,Col,Input,InputNumber} from 'rsuite';


export default function PressureDrop(props){

    const [error,setError] = useState("")

    return(
        <>

            <Panel bordered header={props.paragraph.replaceAll("_",".") + " Πτώση πίεσης"} className="withMargin">
                <Grid fluid>
                    <Row>
                        {
                            props.sprayer.branches.map((branch,branchIndex)=>{
                                return(
                                    <Col xs={24} md={8}>
                                        <p>{"Μέτρηση κλάδου " + (branchIndex+1).toString()}</p>
                                        <Input value={props.inspection.measurements[props.paragraph].values[branchIndex]} type="number" onChange={value=>{
                                                var values = props.inspection.measurements[props.paragraph].values;
                                                values[branchIndex]= Number(value)
                                                
                                                console.log(({
                                                    ...props.inspection,
                                                    measurements:{
                                                        ...props.inspection.measurements,
                                                        [props.paragraph]:{
                                                            values:values,
                                                            result:calculateResult(values,props.sprayer)
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
                                                            result:calculateResult(values,props.sprayer)
                                                        }
                                                    }
                                                })
                                            }
                                          
                
                                            }/>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Grid>
            </Panel>
            
        </>
    )
}



function calculateResult(values,sprayer){
    var ref = sprayer.maxPressure - sprayer.maxPressure * 0.1;

    for(var i=0;i<values.length;i++){
        if(values[i]>ref){
            return false;
        }
    }
    return true;
}