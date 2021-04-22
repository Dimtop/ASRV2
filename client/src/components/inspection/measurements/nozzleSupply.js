//9.3.2.a
import React, {useState,useEffect} from 'react';

//Components

import {Panel, Row, Col,Input,InputNumber,Grid} from 'rsuite';


export default function NozzleSupply(props){

    const [error,setError] = useState("")

    return(
        <>

            <Panel bordered header={props.paragraph.replaceAll("_",".")  + " Μέτρηση παροχής ακροφυσίων"} className="withMargin">
                <Grid fluid>
                    <Row>
                        <Col xs={24}>
                            <p><b>Οι μετρήσεις πρέπει να γίνονται σε διάρκεια 1 λεπτού</b></p>
                        </Col>
                    </Row>
      
                    {
                        props.sprayer.branches.map((branch,branchIndex)=>{
                            return(
                                <Row key={"b"+branchIndex}>
                                    <Panel className="withMargin" header={"Κλάδος " + (branchIndex+1).toString()} bordered collapsible>
                                    {
                                        branch.injectors.map((injector,injectorIndex)=>{

                                            return(
                                                <Col xs={24} md={12} key={"i"+injectorIndex}>
                                                    <Panel className="withMargin" header={"Μπεκ " + (injectorIndex+1).toString()} bordered>
                                                
                                                    {
                                                        injector.nozzles.map((nozzle,nozzleIndex)=>{
                                                            return(
                                                                <div  key={"n"+nozzleIndex}>
                                                                <p>{"Ακροφύσιο " + (nozzleIndex+1).toString() + " (δηλωμένη πίεση κατασκευαστή " + nozzle.flow + " )"}</p>
                                                                <Input type="number" value={props.inspection.measurements[props.paragraph].values[branchIndex][injectorIndex][nozzleIndex]} 
                                                                                            onChange={value=>{
                                                                                                const values = modifyNozzleSupplyMeasurementValue( props.inspection.measurements[props.paragraph].values,branchIndex,injectorIndex,nozzleIndex,Number(value)) 
                                                                                                console.log("INSPECTION MEAS")
                                                                                                console.log(({
                                                                                                    ...props.inspection,
                                                                                                    measurements:{
                                                                                                        ...props.inspection.measurements,
                                                                                                        [props.paragraph]:{
                                                                                                            ...props.inspection.measurements[props.paragraph],
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
                                                                </div>
                                                            )
                                                          
                                                        })
                                                    }
                                                    </Panel>
                                                </Col>
                                            
                                            )
                                            
                                        })
                                    }
                                    </Panel>
                                </Row>
                            )
                           
                        })
                    }
                </Grid>
                
          
                <p>{error}</p>
            </Panel>
            
        </>
    )
}

function modifyNozzleSupplyMeasurementValue(measurement,branchIndex,injectorIndex,nozzleIndex,value){
    console.log(measurement)
    measurement[branchIndex][injectorIndex][nozzleIndex]  = value;


    return measurement;
}

function calculateResult(values,sprayer){

    for(var i=0;i<values.length;i++){
        for(var y=0;y<values[i].length;y++){
            for(var z=0;z<values[i][y].length;z++){
                if(values[i][y][z] != sprayer.branches[i].injectors[y].nozzles[z].flow){
                    return false;
                }
            }
        }
    }

    return true;
}