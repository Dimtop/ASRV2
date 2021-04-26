//8.3.1
import React, {useState,useEffect} from 'react';

//Components

import {Panel,Grid,Row, Col,Input,InputNumber} from 'rsuite';


export default function NozzleDistance(props){

    const [error,setError] = useState("")

    useEffect(()=>{

    },[props.inspection])
    return(
        <>

            <Panel bordered header={props.paragraph.replaceAll("_",".") + " Απόσταση μεταξύ ακροφυσίων"} className="withMargin">
                <Grid fluid>
                    
                    <Row>
                        {
                            props.sprayer.branches.map((branch,branchIndex)=>{
                                return branch.injectors.map((injector,injectorIndex)=>{
                                    if(injectorIndex%2==0){
                                        return(
                                   
                                                <Col xs={24} md={8}>
                                                    <p>{"Απόσταση ακροφυσίων μπεκ " + (injectorIndex+1).toString() + "-" +(injectorIndex+2).toString() }</p>
                                                    <Input type="number" value={ props.inspection.measurements[props.paragraph].values[Math.ceil(injectorIndex/2)]}  onChange={value=>{
                                                                                var values = props.inspection.measurements[props.paragraph].values;
                                                                                values[Math.ceil(injectorIndex/2)] = Number(value)
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
                              
                                        )
                                    }
                                   
                                })
                            })
                        }
                       
                       
                    </Row>

                </Grid>
           
                <p>{error}</p>
            </Panel>
            
        </>
    )
}


function calculateResult(values){
    var ref = values[0];
    for(var i=0;i<values.length;i++){
        if(values[i]!=ref){
            return false;
        }
    }
    return true;
}
