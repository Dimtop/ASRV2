import React, {useState,useEffect} from 'react'

//Components
import {Grid,Row,Col,Panel,InputPicker,Button} from 'rsuite';


//Helpers
import {getCustomers} from '../../helpers/dataManager';
import {mapCustomersToPickerData} from '../../helpers/mapToPickerData'

//Libraries
import Cookies from 'js-cookie'

export default function PreInspectionFilters(props) {


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
                        <Button appearance="primary" onClick={ ()=>props.setFilteredPreInspections(filterPreInspections(props.sprayers,props.preInspections,filters))}>Εφαρμογή</Button>
                    </Col>
                    <Col xs={24} >
                        <Button appearance="primary" onClick={ ()=>location.reload()}>Επαναφορά</Button>
                    </Col>
              </Row>
          </Panel>
      </Grid>  
    );
}


 function filterPreInspections(sprayers,preInspections,filters){


    console.log(sprayers)

    if(filters.customer){
        preInspections = preInspections.filter( (preInspection,index)=>{
            if(sprayers[index].customers.findIndex(customer=>customer.customerID == filters.customer)>=0){
                return true;
            }
            return false;
        })
    }


    console.log(preInspections)

    return preInspections;
}