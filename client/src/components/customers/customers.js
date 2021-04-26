import React, {useState,useEffect} from 'react';
//Styles
import "../../styles/main.style.css"
//Libraries
import Cookies from 'js-cookie';
//Components
import CustomerTile from './customerTile';
import {Grid,Row,Icon,Col,Button,Panel} from 'rsuite'
import History from '../utils/history'
//Helpers
import {getCustomers} from '../../helpers/dataManager';



export default function Customers(){

 
    
    const [customers,setCustomers] = useState([]);

    useEffect(async ()=>{
 
        var customersData = await getCustomers("?userID=" + Cookies.get("userID"));
        setCustomers(customersData.customers);
           //History
        History.push("/customers")
    },[])

    return(
        <>
            <Grid>
                <Row>
                    {
                        customers.map(customer=>{
                            return <CustomerTile  customer={customer} key={customer._id}/>
                        })
                    }    
                    <Col xs={8}>
                        <Button appearance="primary" onClick={()=>location.replace("/customers/new")}>Προσθήκη νέου</Button>
                    </Col>          
                </Row>
            </Grid>
        </>

    );
}