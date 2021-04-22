import React,{useState,useEffect} from 'react';

//Styles
import "../../styles/main.style.css";


//Helpers
import {getCustomer,getSprayer} from '../../helpers/dataManager'
import getDateString from '../../helpers/getDateString'

//Components
import { Alert,Col,Panel,Button } from 'rsuite';


export default function PreInspectionTile(props){


    const [sprayer,setSprayer] = useState({});
    const [customers,setCustomers] = useState([]);

    useEffect(async()=>{
        const sprayerData = await getSprayer(props.preInspection.sprayerID);
        
        if(sprayerData.error){
            Alert.error("Υπήρξε ένα πρόβλημα");
            return;
        }

        var tmpCustomers = [];
        for(var customer of sprayerData.sprayer.customers){
            var customerData = await getCustomer(customer.customerID);
        
            if(customerData.error){
                Alert.error("Υπήρξε ένα πρόβλημα");
                return;
            }
            tmpCustomers.push(customerData.customer);
        }

        setSprayer(sprayerData.sprayer)
        setCustomers(tmpCustomers)

    },[])

    return(
        <>
            <Col xs={24} md={12}>
                <Panel header={props.preInspection._id} bordered>
                    <p><b>Ψεκαστήρας: </b>{sprayer.serialNumber}</p>
                    <p><b>Ιδιοκτήτες: </b>{customers.map(c=>c.name).join(", ")}</p>
                    <p><b>Ημερομηνία: </b>{getDateString(props.preInspection.date)}</p>
                    <Button appearance="ghost" onClick={()=>location.replace("/preInspections/" + props.preInspection._id)}>Επεξεργασία</Button>
                </Panel>
            </Col>

        </>
    );
}