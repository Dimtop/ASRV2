
import React, {useState,useEffect} from 'react';

//Styles
import "../../styles/main.style.css"

//Libraries
import Cookies from 'js-cookie';

//Components
import {Grid,Row,Col,Panel,InputPicker,Input,Button,Toggle,Divider, Alert,InputNumber} from 'rsuite';

//Helpers
import {getCustomers,getCustomer,getAllCategories,createSprayer,getSprayer,updateSprayer} from '../../helpers/dataManager';
import {mapCustomersToPickerData,mapCategoriesToPickerData,mapMovementTypesToPickerData} from '../../helpers/mapToPickerData'
import getIDFromURL from '../../helpers/getIDFromURL'

//Models
import sprayerModel from '../../models/sprayer.model'

//Data
import {regions,mapToPickerData} from '../../data/regions';
import movementTypes from '../../data/movementTypes';


function Sprayer(props){

    const [sprayer,setSprayer] = useState(sprayerModel); 
    const [customers,setCustomers] = useState([])
    const [categories,setCategories] = useState([])
    const [tmpCustomerID,setTmpCustomerID] = useState("");
    const [tmpOwnershipPercentage,setTmpOwnershipPercentage] = useState(0);
    const [tmpInjectorsNubmer,setTmpInjectorsNumber] = useState(1)

   const [tmpFlows,setTmpFlows] = useState(findMaxNumberOfNozzles(sprayer.branches));
   

    useEffect(async ()=>{
        var customersData = await getCustomers("?userID=" + Cookies.get("userID"))
        setTmpCustomerID(customersData.customers[0]._id)
        setCustomers(customersData.customers);

        var categoriesData = await getAllCategories();
        setCategories(categoriesData.categories);

    
       
        if(!props.new){
            var sprayerData = await getSprayer(getIDFromURL("sprayers"))
            if(sprayerData.error){
                Alert.error(sprayerData.error)
            }
            else{              
                setTmpFlows(findMaxNumberOfNozzles(sprayerData.sprayer.branches))  
                setSprayer(sprayerData.sprayer)
            }
        }
       
    
    },[])

    return(
        <>
            <Grid>
                <Panel bordered header="????????????????????" className="withMargin">
                    <Row>
                        <Col xs={24} md={8}>
                            <p className="label">??????????????</p>
                            <InputPicker data={mapCustomersToPickerData(customers).sort((a,b)=>a.label<b.label?-1:1)}  value={tmpCustomerID} onChange={value=>setTmpCustomerID(value)}/>
                     
                        </Col>
                        <Col xs={24} md={8}>
                            <p className="label">?????????????? ????????????????????????????</p>
                            <Input  value={tmpOwnershipPercentage} onChange={value=>setTmpOwnershipPercentage(value)}/>
                        </Col>
                        <Col xs={24} md={8}>
                            <Button appearance="primary" onClick={()=>setSprayer({...sprayer,customers:addCustomer(sprayer.customers,tmpCustomerID,tmpOwnershipPercentage)})}>????????????????</Button>
                        </Col>
                    </Row>
                    <Row>
                
                    {
                        sprayer.customers.map((customer,customerIndex)=>{
                            return(

                              
                                        <Col xs={24} md={8} key={customer.customerID} key={customer.VAT}>
                                            <Panel bordered className="tilePanel">
                                                <p>{customers.find(currCustomer=>currCustomer._id==customer.customerID).name}</p>
                                                <p>{customer.ownershipPercentage +"%"}</p>
                                                <Button appearance="ghost" onClick={()=>setSprayer({...sprayer,customers:removeCustomer(sprayer.customers,customerIndex)})}>????????????????</Button>
                                            </Panel>
                                        </Col>
                                    
                            )
                        })

                    }
                    </Row>
                </Panel>

                <Panel className="withMargin" header="???????????????? ????????????????????" bordered >
                    <Row>
                        <Col xs={24} md={12}>
                            <p className="label">??????????????????</p>
                            <InputPicker data={mapCategoriesToPickerData(categories)} value={sprayer.categoryID} defaultValue={"604f8ceccc02fcdb73c3b544"} onChange={(value)=>setSprayer({...sprayer,categoryID:value})}/>
                        </Col>
                        <Col xs={24} md={12}>
                            <p className="label">??????????????????</p>
                            <InputPicker data={mapMovementTypesToPickerData(movementTypes)} value={sprayer.movementType} defaultValue={"auto"} onChange={(value)=>setSprayer({...sprayer,movementType:value})}/>
                        </Col>
                        <Col xs={24} md={12}>
                            <p className="label">??????????????????????????</p>
                            <Input value={sprayer.manufacturer} onChange={(value)=>setSprayer({...sprayer,manufacturer:value})}/>
                        </Col>
                        <Col xs={24} md={12}>
                            <p className="label">???????????????? ????????????????</p>
                            <Input value={sprayer.commercialName} onChange={(value)=>setSprayer({...sprayer,commercialName:value})}/>
                        </Col>
                        <Col xs={24} md={12}>
                            <p className="label">?????????????? ????????????</p>
                            <Input value={sprayer.serialNumber} onChange={(value)=>setSprayer({...sprayer,serialNumber:value})}/>
                        </Col>
                        <Col xs={24} md={12}>
                            <p className="label">????????????????????</p>
                            <InputPicker data={mapToPickerData()} value={sprayer.region} onChange={(value)=>setSprayer({...sprayer,region:value})}/>
                        </Col>
                        <Col xs={24} md={12}>
                            <p className="label">???????????????????? ???? ??????</p>
                            <Input type="number" min={1} value={sprayer.age} onChange={(value)=>setSprayer({...sprayer,age:value})}/>
                        </Col>
                        <Col xs={24} md={12}>
                            <p className="label">???????????? ????????????????????</p>
                            <InputPicker data={[{label:"??????",value:true},{label:"??????",value:false}]} value={sprayer.ceCompliance} onChange={(value)=>setSprayer({...sprayer,ceCompliance:value})}/>
                        </Col>
                        <Col xs={24} md={12}>
                            <p className="label">?????????????? ??????????????????</p>
                            <Input type="number" min={1} value={sprayer.tanksNumber} onChange={(value)=>setSprayer({...sprayer,tanksNumber:value})}/>
                        </Col>
                        <Col xs={24} md={12}>
                            <p className="label">???????????????????????? ?????????????????? ?????????????????? ???? ??????????</p>
                            <Input type="number" min={1} value={sprayer.totalTanksCapacity} onChange={(value)=>setSprayer({...sprayer,totalTanksCapacity:value})}/>
                        </Col>
                        <Col xs={24} md={12}>
                            <p className="label">???????????????? ?????????? ??????????????????</p>
                            <Input type="number" min={1} value={sprayer.totalArmLength} onChange={(value)=>setSprayer({...sprayer,totalArmLength:value})}/>
                        </Col>
                        <Col xs={24} md={12}>
                            <p className="label">?????????????? ?????????? ??????????????????????</p>
                            <Input type="number" min={1} value={sprayer.maxPressure} onChange={(value)=>setSprayer({...sprayer,maxPressure:value})}/>
                        </Col>
                    </Row>
                  
                </Panel>


                <Panel className="withMargin" bordered header="????????????">
                    <Row>
                        <Col xs={12}>
                            <p className="label">?????????????? ???????? ??????????</p>
                            <Input type="number" defaultValue={1} min={1} value={tmpInjectorsNubmer} onChange={value=>setTmpInjectorsNumber(value)}/> 
                        </Col>
                        <Col xs={12}>
                            <Button appearance="primary" onClick={()=>{setSprayer({...sprayer,branches:addBranch(sprayer.branches,tmpInjectorsNubmer)});setTmpFlows(findMaxNumberOfNozzles(sprayer.branches))}}>???????????????? ??????????</Button>
                        </Col>
                        {
                            sprayer.branches.map((branch,branchIndex)=>{
                                return(
                                    <Col xs={24} key={"branch" + branchIndex}>
                                        <Panel className="withMargin" header={"???????????? " + (branchIndex+1).toString() + "    ("  + sprayer.branches[branchIndex].injectors.length.toString() + " ????????)"} bordered collapsible>
                                            <Row>
                                                {
                                                    branch.injectors.map((injector,injectorIndex)=>{
                                                        return(
                                                            <Col xs={24} md={8} key={"injector" + injectorIndex}>
                                                                <Panel bordered header={"???????? " + (injectorIndex+1).toString() + "    ("  + sprayer.branches[branchIndex].injectors[injectorIndex].nozzles.length.toString() + " ??????????????????)"} collapsible>
                                                                    
                                                                    <Row>
                                                           
                                                                        {
                                                                            injector.nozzles.map((nozzle,nozzleIndex)=>{
                                                                                return(
                                                                                    <div key={"nozzle" + nozzleIndex}>
                                                                                    <Col xs={24}>
                                                                                        <p>{"?????? ???????????????????? " + (nozzleIndex+1).toString()}</p>
                                                                                    </Col>
                                                                                    <Col xs={24}>
                                                                                        <Input value={sprayer.branches[branchIndex].injectors[injectorIndex].nozzles[nozzleIndex].flow}/>
                                                                                    </Col>
                                                                                    <Col xs={24}>
                                                                                        <Button appearance="ghost" size="xs" onClick={()=>{setSprayer({...sprayer,branches:removeNozzle(branchIndex,injectorIndex,nozzleIndex,sprayer.branches)});setTmpFlows(findMaxNumberOfNozzles(sprayer.branches))}}>???????????????? ????????????????????</Button>
                                                                                    </Col>

                                                                                    </div>
                                                                                )
                                                                            })
                                                                        }
                                                                        <Col xs={24}>
                                                                            <Button appearance="primary" onClick={()=>{setSprayer({...sprayer,branches:addNozzle(branchIndex,injectorIndex,sprayer.branches)});setTmpFlows(findMaxNumberOfNozzles(sprayer.branches))}}>???????????????? ????????????????????</Button>
                                                                        </Col>
                                                                    </Row>
                                                                  
                                                                </Panel>
                                                            </Col>
                                                        );
                                                    })
                                                }
                                                    <Col xs={24}>
                                                        <Button appearance="ghost" onClick={()=>{setSprayer({...sprayer,branches:removeBranch(branchIndex,sprayer.branches)});setTmpFlows(findMaxNumberOfNozzles(sprayer.branches))}}>???????????????? ??????????</Button>
                                                    </Col>
                                            </Row>
                                        
                                        </Panel>
                                    </Col>

                                );
                            })
                        }
                       
                    </Row>
                </Panel>
                <Panel className="withMargin" bordered header="???????????????? ????????????????">
                        <Row>
                            <Col xs={24}>
                                <Divider>???????????????? ???????????????? ???????? ???? ??????????????????</Divider>
                            </Col>
                            {
                            

                                tmpFlows.map((e,i)=>{
                                    
                                    return(
                                        <Col xs={24} md={12} key={"flow" + i}>
                                            <p>{"?????? ???????????????????? ???????????? " + (i+1).toString()} </p>
                                            <Input type="number" step={0.01}  min={0.01} value={tmpFlows[i]} onChange={value=>setTmpFlows([...updateFlows(tmpFlows,i,Number(value))])}/>
                                        </Col>
                                    )
                                })
                                
                             
                            }
                            <Col xs={24}>
                                <Button appearance="primary" onClick={()=>setSprayer({...sprayer,branches:applyNozzlesFlow(sprayer.branches,tmpFlows)})}>???????????????? ???????? ???? ?????? ???? ??????????????????</Button>
                            </Col>
                        </Row>
                    
                </Panel>
               
        
                    <Panel header="??????????????????" bordered className="withMargin">
                        <Row>
                            <Col xs={24} md={12}>
                                <Button appearance="primary" 
                                    size="lg"
                                    onClick={async()=>{
                                            props.new?
                                            await createSprayer({...sprayer,userID:Cookies.get("userID")}).then(res=>location.replace("/sprayers/" + res.sprayer._id))
                                            :
                                            await updateSprayer({...sprayer,userID:Cookies.get("userID")}).then(res=>res.error?Alert.error(res.error):location.reload())
                                        
                                        }
                                    }
                                    >
                                    ????????????????????
                                </Button>
                            </Col>
                            <Col xs={24} md={12}>
                                <Button size="lg" appearance="primary" onClick={()=>location.replace("/preInspections/new?sprayerID=" + sprayer._id)} disabled={props.new}>???????????????????? ????????????????????????????</Button>
                            </Col>
                        </Row>
                    </Panel>
                  
            
            </Grid>

        </>
    );
}


function updateFlows(tmpFlows,index,value){
    var tmpFlowsUpdated = tmpFlows;
    console.log(tmpFlows)
    tmpFlowsUpdated[index] = value;
    return tmpFlowsUpdated;
}



function addCustomer(customers,tmpCustomerID,tmpOwnershipPercentage){
    customers.push({
        customerID:tmpCustomerID,
        ownershipPercentage:tmpOwnershipPercentage
    });
    console.log(customers)
    return customers;

}


function removeCustomer(customers,customerIndex){
   /* var customerIndex = customers.findIndex(customer=>customer._id==customerID);
    console.log(customerIndex)

    if(customerIndex>=0){
        customers.splice(customerIndex,1);
    }*/

    console.log(customerIndex)

    customers.splice(customerIndex,1);

    console.log(customers)

    return customers;
}


function addBranch(branches,injectorsNumber){
    var injectors = [];

    if(injectorsNumber<=0){
        Alert.error("???????????? ???? ???????????????? ?????????????????????? ?????? ????????.");
        return branches;
    }

    for(var i=0;i<injectorsNumber;i++){
        injectors.push({
            nozzles:[{
                flow:1
            }]
        })
    }

    branches.push({
        injectors:injectors
    })
    console.log(branches)
    return branches;
}

function removeBranch(branchIndex,branches){
    branches.splice(branchIndex,1);
    return branches;
}

function addNozzle(branchIndex,injectorIndex,branches){

    branches[branchIndex].injectors[injectorIndex].nozzles.push({
        flow:1
    })

    return branches
}

function removeNozzle(branchIndex,injectorIndex,nozzleIndex,branches){

    if(branches[branchIndex].injectors[injectorIndex].nozzles.length == 1){
        Alert.error("???????????? ???? ?????????? ?????????????????????? ?????? ??????????????????");
    }
    else{
        branches[branchIndex].injectors[injectorIndex].nozzles.splice(nozzleIndex,1);
    }
 
    return branches;
}

function applyNozzlesFlow(branches,flows){


    if(branches.length == 0){
        Alert.error("?????? ?????????? ?????????????????? ????????????");
        return branches;
    }
    for(var i=0;i<branches.length;i++){
        for(var y=0;y<branches[i].injectors.length;y++){
            for(var z=0;z<branches[i].injectors[y].nozzles.length;z++){
                branches[i].injectors[y].nozzles[z].flow = flows[z];
            }
        }
    }

    Alert.success("???? ???????? ???????????????????? ???????????????????????? ???? ????????????????.");

    console.log(branches)

    return branches;
}


function findMaxNumberOfNozzles(branches){
    var maxNumber =0;
    var driverArray = [];

    for(var i=0;i<branches.length;i++){
        for(var y=0;y<branches[i].injectors.length;y++){
            if(branches[i].injectors[y].nozzles.length > maxNumber){
                maxNumber = branches[i].injectors[y].nozzles.length;
            }
        }
    }

    for(var i=0;i<maxNumber;i++){
        driverArray.push(0.01);
    }


  
    return driverArray;
}

export default Sprayer;