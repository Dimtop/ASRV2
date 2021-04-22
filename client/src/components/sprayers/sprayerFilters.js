import React, {useState,useEffect} from 'react';

//Components
import {Grid,Row,Col,Panel,Button,InputPicker,Input} from 'rsuite';


//Helpers
import {getCustomers} from '../../helpers/dataManager';
import {mapCustomersToPickerData} from '../../helpers/mapToPickerData'
//Libraries
import Cookies from 'js-cookie'

export default function SprayerFilters(props){

    const [customers,setCustomers] = useState([])
    const [filters,setFilters] = useState({})

    useEffect(async ()=>{
        var customersData = await getCustomers("?userID=" + Cookies.get("userID"));
        setCustomers(customersData.customers);

    },[])
    return(
        <Grid>
            <Panel header="Φίλτρα" bordered>
                <Row>
        
                    <Col xs={24} md={12}>
                        <InputPicker data={mapCustomersToPickerData(customers)} onChange={(value)=>setFilters({...filters,customer:value})}/>
                    </Col>
                    <Col xs={24} >
                    <Button appearance="primary" onClick={()=>props.setFilteredSprayers(filterSprayers(props.sprayers,filters))}>Εφαρμογή</Button>
                    </Col>
                </Row>
                
            </Panel>
        </Grid>
    );
}


function filterSprayers(sprayers,filters){

    console.log(filters)
    if(filters.customer){
        sprayers = sprayers.filter(sprayer=>{
            if(sprayer.customers.findIndex(customer=>customer.customerID == filters.customer)>=0){
                return true;
            }
            return false;
        })
    }


    return sprayers;
}