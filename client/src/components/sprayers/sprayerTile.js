import React, {useState,useEffect} from 'react'

//Components
import {Col,Panel,Button} from 'rsuite'

//Helpers
import {getCustomer} from '../../helpers/dataManager'

//Models
import customerModel from '../../models/customer.model.js'


export default function SprayerTile(props){

    const [customers,setCustomers] = useState([]);

    useEffect(async ()=>{
        var tmpCustomers = customers;
        for(var customer of props.sprayer.customers){    
            const customerData=  await getCustomer(customer.customerID);          
            tmpCustomers.push(customerData.customer)
        }
        setCustomers([...tmpCustomers]);
        console.log(customers)
    },[])
    return(
        <Col xs={24} md={8}>
            <Panel header={props.sprayer.serialNumber} bordered>
               
                <Button appearance="primary" onClick={()=>location.replace("/sprayers/" +props.sprayer._id)}>Προβολή</Button>
            </Panel>
        </Col>
    );
}

/*
 {
                    customers.map(customer=>{
                        return(
                            <p>{customer.name +"|" + customer.AFM}</p>
                        )
                    })
                }
                */