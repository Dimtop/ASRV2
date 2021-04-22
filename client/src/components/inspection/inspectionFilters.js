import React, {useState,useEffect} from 'react'

//Components
import {Grid,Row,Col,Panel,InputPicker,Button,Input,DateRangePicker} from 'rsuite';


//Helpers
import {getCustomers} from '../../helpers/dataManager';
import {mapCustomersToPickerData} from '../../helpers/mapToPickerData'

//Libraries
import Cookies from 'js-cookie'

export default function InspectionFilters(props) {


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
                        <p>Ιδιοκτήτης</p>
                        <InputPicker data={mapCustomersToPickerData(customers)} onChange={(value)=>setFilters({...filters,customer:value})}/>
                    </Col>
                    <Col xs={24} md={12}>
                        <p>Sticker</p>
                        <Input type="text"  onChange={(value)=>setFilters({...filters,stickerNumber:value})}/>
                    </Col>
                    <Col xs={24} md={12}>
                        <p>Αριθμός επιθεώρησης</p>
                        <Input type="text"  onChange={(value)=>setFilters({...filters,inspectionNumber:value})}/>
                    </Col>
                    <Col xs={24} md={12}>
                        <p>Ημερομηνία</p>
                        <DateRangePicker className="fullWidth"  onChange={(value)=>setFilters({...filters,dateRange:value})}/>
                    </Col>
                    <Col xs={24} >
                        <Button appearance="primary" onClick={ ()=>props.setFilteredInspections(filterInspections(props.sprayers,props.inspections,filters))}>Εφαρμογή</Button>
                    </Col>
                    <Col xs={24} >
                        <Button appearance="primary" onClick={ ()=>location.reload()}>Επαναφορά</Button>
                    </Col>
              </Row>
          </Panel>
      </Grid>  
    );
}


 function filterInspections(sprayers,inspections,filters){


    console.log(sprayers)

    if(filters.customer){
        inspections = inspections.filter( (inspection,index)=>{
            if(sprayers[index].customers.findIndex(customer=>customer.customerID == filters.customer)>=0){
                return true;
            }
            return false;
        })
    }

    if(filters.stickerNumber){
        inspections = inspections.filter( (inspection,index)=>{
            if(inspection.stickerNumber == filters.stickerNumber){
                return true;
            }
            return false;
        })
    }

    if(filters.inspectionNumber){
        inspections = inspections.filter( (inspection,index)=>{
            if(inspection.inspectionNumber == filters.inspectionNumber){
                return true;
            }
            return false;
        })
    }

    if(filters.dateRange){
        console.log(filters.dateRange)
        inspections = inspections.filter( (inspection,index)=>{
            var inspectionDate = new Date(inspection.date )
            console.log(inspectionDate)
            console.log(filters.dateRange[0])
            console.log(filters.dateRange[1])
            if(inspectionDate >= filters.dateRange[0] && inspectionDate <= filters.dateRange[1] ){
                return true;
            }
            return false;
        })
    }



    console.log(inspections)

    return inspections;
}