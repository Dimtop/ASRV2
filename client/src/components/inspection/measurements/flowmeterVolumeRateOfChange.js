//5.3

//Components

import React, {useState,useEffect} from 'react';

//Components

import {Panel, Grid,Row, Col,Input,InputNumber} from 'rsuite';


export default function FlowmeterVolumeRateOfChange(props){

    const [error,setError] = useState("")
    const [injectors,setInjectors] = useState([])
    const [injectorsRef,setInjectorsRef] = useState([])
    const [d250,setd250] = useState([])
    const [d275,setd275] = useState([])
    const [d2100,setd2100] = useState([])


    useEffect(()=>{
        var injectors = [];
        var injectorsRef = [];
        for(var i=0;i<props.inspection.measurements["9_3_2_a"].values.length;i++){
       
            for(var y=0;y<props.inspection.measurements["9_3_2_a"].values[i].length;y++){
                injectors.push(Math.max(...props.inspection.measurements["9_3_2_a"].values[i][y]))
                injectorsRef.push(Math.max(...props.sprayer.branches[i].injectors[y].nozzles.map(e=>e.flow)))
               
            }
        }

        var length50 =  Math.ceil(injectors.length*0.5);
        var length75 =  Math.ceil(injectors.length*0.75);

        console.log("D2")
        console.log(injectors.slice(0,length50))
        console.log(injectors.slice(0,length75))
        console.log(injectors)
        console.log(injectorsRef)

        setd250(injectors.slice(0,length50));
        setd275(injectors.slice(0,length75));
        setd2100(injectors)
        setInjectors(injectors)
        setInjectorsRef(injectorsRef)
    },[props.inspection])

    return(
        <>

            <Panel bordered header={props.paragraph.replaceAll("_",".") + " Άλλες διατάξεις μέτρησης (ροόμετρα και αισθητήρες ταχύτητας για τον έλεγχο του ρυθμού μεταβολής όγκου/επιφάνεια)"}className="withMargin">
                <Grid fluid>
                    <Panel header="50% ακροφυσίων">
                        <Row>
                            <Col xs={24} md={12}>
                                <p>Πίεση</p>
                                <Input type="number" value={props.inspection.measurements[props.paragraph].values[0].p1} 
                                onChange={value=>{
                                    value = Number(value)
                                    var values = [{...props.inspection.measurements[props.paragraph].values[0],p1:value},props.inspection.measurements[props.paragraph].values[1],props.inspection.measurements[props.paragraph].values[2]]

                                    console.log(({
                                        ...props.inspection,
                                        measurements:{
                                            ...props.inspection.measurements,
                                            [props.paragraph]:{
                                                values:values,
                                                result:calculateResult(values,d250,d275,d2100,injectorsRef)
                                            }
                                        }
                                    }))
                                    props.setInspection({
                                        ...props.inspection,
                                        measurements:{
                                            ...props.inspection.measurements,
                                            [props.paragraph]:{
                                                values:values,
                                                result:calculateResult(values,d250,d275,d2100,injectorsRef)
                                            }
                                        }
                                    })
                                }
                              
    
                            }/>
                                
                            </Col>
                            <Col xs={24} md={12}>
                                <p>Ένδειξη ροομέτρου</p>
                                <Input type="number" value={props.inspection.measurements[props.paragraph].values[0].q} 
                                    onChange={value=>{
                                        value = Number(value)
                                        var values = [{...props.inspection.measurements[props.paragraph].values[0],q:value},props.inspection.measurements[props.paragraph].values[1],props.inspection.measurements[props.paragraph].values[2]]
                                        
                                        console.log(({
                                            ...props.inspection,
                                            measurements:{
                                                ...props.inspection.measurements,
                                                [props.paragraph]:{
                                                    values:values,
                                                    result:calculateResult(values,d250,d275,d2100,injectorsRef)
                                                }
                                            }
                                        }))
                                        props.setInspection({
                                            ...props.inspection,
                                            measurements:{
                                                ...props.inspection.measurements,
                                                [props.paragraph]:{
                                                    values:values,
                                                    result:calculateResult(values,d250,d275,d2100,injectorsRef)
                                                }
                                            }
                                        })
                                    }
                                  
        
                                }/>
                            </Col>
                        </Row>
                    </Panel>

                    <Panel header="75% ακροφυσίων">
                        <Row>
                            <Col xs={24} md={12}>
                                <p>Πίεση</p>
                                <Input type="number" value={props.inspection.measurements[props.paragraph].values[1].p1} 
                                    onChange={value=>{
                                        value = Number(value)
                                        var values = [props.inspection.measurements[props.paragraph].values[0],{...props.inspection.measurements[props.paragraph].values[1],p1:value},props.inspection.measurements[props.paragraph].values[2]]
                                        
                                        console.log(({
                                            ...props.inspection,
                                            measurements:{
                                                ...props.inspection.measurements,
                                                [props.paragraph]:{
                                                    values:values,
                                                    result:calculateResult(values,d250,d275,d2100,injectorsRef)
                                                }
                                            }
                                        }))
                                        props.setInspection({
                                            ...props.inspection,
                                            measurements:{
                                                ...props.inspection.measurements,
                                                [props.paragraph]:{
                                                    values:values,
                                                    result:calculateResult(values,d250,d275,d2100,injectorsRef)
                                                }
                                            }
                                        })
                                    }
                                  
        
                                }/>
                            </Col>
                            <Col xs={24} md={12}>
                                <p>Ένδειξη ροομέτρου</p>
                                <Input type="number" value={props.inspection.measurements[props.paragraph].values[1].q} 
                                    onChange={value=>{
                                        value = Number(value)
                                        var values = [props.inspection.measurements[props.paragraph].values[0],{...props.inspection.measurements[props.paragraph].values[1],q:value},props.inspection.measurements[props.paragraph].values[2]]
                                        
                                        console.log(({
                                            ...props.inspection,
                                            measurements:{
                                                ...props.inspection.measurements,
                                                [props.paragraph]:{
                                                    values:values,
                                                    result:calculateResult(values,d250,d275,d2100,injectorsRef)
                                                }
                                            }
                                        }))
                                        props.setInspection({
                                            ...props.inspection,
                                            measurements:{
                                                ...props.inspection.measurements,
                                                [props.paragraph]:{
                                                    values:values,
                                                    result:calculateResult(values,d250,d275,d2100,injectorsRef)
                                                }
                                            }
                                        })
                                    }
                                  
        
                                }/>
                            </Col>
                        </Row>
                    </Panel>

                    <Panel header="100% ακροφυσίων">
                        <Row>
                            <Col xs={24} md={12}>
                                <p>Πίεση</p>
                                <Input type="number" value={props.inspection.measurements[props.paragraph].values[2].p1} 
                                    onChange={value=>{
                                        value = Number(value)
                                        var values = [props.inspection.measurements[props.paragraph].values[0],props.inspection.measurements[props.paragraph].values[1],{...props.inspection.measurements[props.paragraph].values[2],p1:value}]
                                        
                                        console.log(({
                                            ...props.inspection,
                                            measurements:{
                                                ...props.inspection.measurements,
                                                [props.paragraph]:{
                                                    values:values,
                                                    result:calculateResult(values,d250,d275,d2100,injectorsRef)
                                                }
                                            }
                                        }))
                                        props.setInspection({
                                            ...props.inspection,
                                            measurements:{
                                                ...props.inspection.measurements,
                                                [props.paragraph]:{
                                                    values:values,
                                                    result:calculateResult(values,d250,d275,d2100,injectorsRef)
                                                }
                                            }
                                        })
                                    }
                                  
        
                                }/>
                            </Col>
                            <Col xs={24} md={12}>
                                <p>Ένδειξη ροομέτρου</p>
                                <Input type="number" value={props.inspection.measurements[props.paragraph].values[2].q} 
                                    onChange={value=>{
                                        value = Number(value)
                                        var values = [props.inspection.measurements[props.paragraph].values[0],props.inspection.measurements[props.paragraph].values[1],{...props.inspection.measurements[props.paragraph].values[2],q:value}]
                                        
                                        console.log(({
                                            ...props.inspection,
                                            measurements:{
                                                ...props.inspection.measurements,
                                                [props.paragraph]:{
                                                    values:values,
                                                    result:calculateResult(values,d250,d275,d2100,injectorsRef)
                                                }
                                            }
                                        }))
                                        props.setInspection({
                                            ...props.inspection,
                                            measurements:{
                                                ...props.inspection.measurements,
                                                [props.paragraph]:{
                                                    values:values,
                                                    result:calculateResult(values,d250,d275,d2100,injectorsRef)
                                                }
                                            }
                                        })
                                    }
                                  
        
                                }/>
                            </Col>
                        </Row>
                    </Panel>
                </Grid>
        
                <p>{error}</p>
            </Panel>
            
        </>
    )
}


function calculateResult(values,d250,d275,d2100,injectorsRef){

    var d150 =[];
    var d175 = [];
    var d1100 = [];
    //50%
    for(var i=0;i<d250.length;i++){
        var p1=values[0].p1;
        var p2= injectorsRef[i];
        var c = Math.sqrt(p1/p2);
        d150.push(d250[i]*c);
    }

    //75%
    for(var i=0;i<d275.length;i++){
        var p1=values[0].p1;
        var p2= injectorsRef[i];
        var c = Math.sqrt(p1/p2);
        d175.push(d275[i]*c);
    }

    //100%
    for(var i=0;i<d2100.length;i++){
        var p1=values[0].p1;
        var p2= injectorsRef[i];
        var c = Math.sqrt(p1/p2);
        d1100.push(d2100[i]*c);
    }

    console.log("RESULTS")
    var q1 = d150.reduce( (a,b)=>a+b,0)
    var q2 = d175.reduce( (a,b)=>a+b,0)
    var q3 = d1100.reduce( (a,b)=>a+b,0)

    var q1Min = values[0].q - values[0].q*0.002
    var q1Max = values[0].q + values[0].q*0.002

    var q2Min = values[1].q - values[1].q*0.002
    var q2Max = values[1].q + values[1].q*0.002

    var q3Min = values[2].q - values[2].q*0.002
    var q3Max = values[2].q + values[2].q*0.002


    
    console.log(d250)
    console.log(d275)
    console.log(d2100)

    console.log(d150)
    console.log(d175)
    console.log(d1100)

    console.log(q1)
    console.log(q2)
    console.log(q3)

    if( (q1<q1Min || q1>q1Max) ||
    (q2<q2Min || q2>q2Max) ||
    (q3<q3Min || q3>q3Max)){
        console.log("FALSE")
        return false;
    }

    return true;
}