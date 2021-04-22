//8.3.2
import React, {useState,useEffect} from 'react';

//Components

import {Panel,Grid,Row, Col,Input,InputPicker} from 'rsuite';


export default function NozzlesOrientation(props){

    const [error,setError] = useState("")
    const [orientations,setOrientations] = useState([{
        label:"Κατακόρυφος προσανατολισμός",
        value:1
    },{
        label:"Μη κατακόρυφος προσανατολισμός",
        value:0
    }])

    useEffect(()=>{

    },[props.inspection])
    return(
        <>

            <Panel bordered header={props.paragraph.replaceAll("_",".") + " Προσανατολισμός ακροφυσίων /κατακόρυφη θέση σώματος ακροφυσίων"} className="withMargin">
                <Grid fluid>
                    <Row>
                        {
                            props.sprayer.branches.map((branch,branchIndex)=>{
                                return branch.injectors.map((injector,injectorIndex)=>{                                
                                    return(
                                
                                            <Col xs={24} md={8}>
                                                <p>{"Προσανατολισμός ακροφυσίων μπεκ " + (injectorIndex+1).toString() }</p>
                                                <InputPicker data={orientations} value={ props.inspection.measurements[props.paragraph].values[injectorIndex]}  
                                                            onChange={value=>{
                                                                var values = props.inspection.measurements[props.paragraph].values
                                                                values[injectorIndex] = Number(value)
                                                                
                                                                console.log("INSPECITON MEAS")
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
    for(var i=0;i<values.length;i++){
        if(values[i]==0){
            return false;
        }
    }
    return true;
}
