import React, {useState, useEffect} from 'react';
//Components
import { Input,Panel,Grid,Row,Col,Button} from 'rsuite';
//Styles
import '../../styles/main.style.css'
//Libraries

import Cookies from 'js-cookie';
//Data
//Helpers
import {createCustomer,getCustomer,updateCustomer} from '../../helpers/dataManager'
import getIDFromURL from '../../helpers/getIDFromURL'
//Models
import customerModel from '../../models/customer.model'




export default function Customer(props){

    const [customer,setCustomer] = useState(customerModel);
        
    useEffect(async ()=>{
        if(!props.new){
            var customerData = await getCustomer(getIDFromURL("customers"));

            setCustomer(customerData.customer);
        }
    },[])


    return(
        <Panel header="Στοιχεία πελάτη" bordered>
            <Grid fluid>
                <Row>
                    <Col xs={24} >
                        <p className="label">Ονοματεπώνυμο</p>
                        <Input value={customer.name} onChange={value=>setCustomer({...customer,name:value})}/>
                    </Col>
                    <Col xs={24} >
                        <p className="label">Πατρώνυμο</p>
                        <Input value={customer.fatherName} onChange={value=>setCustomer({...customer,fatherName:value})}/>
                    </Col>
                    <Col xs={24} >
                        <p className="label">ΑΦΜ</p>
                        <Input value={customer.AFM} onChange={value=>setCustomer({...customer,AFM:value})}/>
                    </Col>
                    
                    <Col xs={24} >
                        <p className="label">Διεύθυνση</p>
                        <Input value={customer.address} onChange={value=>setCustomer({...customer,address:value})}/>
                    </Col>
                    <Col xs={24} >
                        <p className="label">Τηλέφωνο</p>
                        <Input value={customer.phone} onChange={value=>setCustomer({...customer,phone:value})}/>
                    </Col>
                    <Col xs={24} >
                        <p className="label">Email</p>
                        <Input value={customer.email} onChange={value=>setCustomer({...customer,email:value})}/>
                    </Col>
                    <Col xs={24}>
                        <Button appearance="primary" 
                            onClick={
                                props.new?
                                async ()=>await createCustomer({...customer,userID:Cookies.get("userID")}).then(location.reload())
                                :
                                async ()=>await updateCustomer({...customer,userID:Cookies.get("userID")}).then(location.reload())
                            }>
                            Ενημέρωση
                            </Button>
                    </Col>
                </Row>

           
          
            </Grid>
        </Panel>
    );
}