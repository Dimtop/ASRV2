import React,{useState,useEffect} from 'react';

//Styles
import "../../styles/main.style.css";


//Helpers
import {getCustomer,getSprayer,getPreInspection} from '../../helpers/dataManager'
import getDateString from '../../helpers/getDateString'

//Components
import { Alert,Col,Panel,Button ,Grid,Row} from 'rsuite';


export default function InspectionTile(props){


    const [sprayer,setSprayer] = useState({});
    const [customers,setCustomers] = useState([]);

    useEffect(async()=>{
        
        const preInspectionData =await getPreInspection(props.inspection.preInspectionID);    
        if(preInspectionData.error){
            Alert.error("Υπήρξε ένα πρόβλημα");
            return;
        }
    
        const sprayerData = await getSprayer(preInspectionData.preInspection.sprayerID);
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
            <Col xs={24} md={12} className="withMargin">
                <Panel header={props.inspection.stickerNumber} bordered collapsible>
                    <Grid fluid>
                        <Row>
                            <Col xs={12}>
                                <p><b>Ψεκαστήρας: </b>{sprayer.serialNumber}</p>
                            </Col>
                            <Col xs={12}>
                                <p><b>Ιδιοκτήτες: </b>{customers.map(c=>c.name).join(", ")}</p>
                            </Col>
                            <Col xs={12}>
                                <p><b>Ημερομηνία: </b>{getDateString(props.inspection.date)}</p>
                            </Col>
                            <Col xs={12}>
                                <p><b>Sticker: </b>{props.inspection.stickerNumber}</p>
                            </Col>
                            <Col xs={12}>
                                <p><b>Αριθμός επιθεώρησης: </b>{props.inspection.inspectionNumber}</p>
                            </Col>
                            <Col xs={12}>
                                <p><b>Κατηγορία: </b>{(props.inspection.result+1).toString()}</p>
                            </Col>
                        </Row>
                    </Grid>
          
  
                    <Button appearance="ghost" onClick={()=>location.replace("/inspections/" + props.inspection._id)}>Επεξεργασία</Button>
                    <Button appearance="ghost">Προβολή αναφοράς</Button>
                </Panel>
            </Col>

        </>
    );
}