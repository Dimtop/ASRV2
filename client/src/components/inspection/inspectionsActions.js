import React, {useState,useEffect} from 'react'

//Components
import {Panel,Grid,Col,Row,Button,Input, Alert} from 'rsuite'

//Constants
import generalConstants from '../../constants/generalConstants'

//Libraries
import Cookies from 'js-cookie'


export default function InspectionsActions(props){

    const [reportURL,setReportURL] = useState("")
    useEffect(()=>{

    },[props.filteredInspections])

    return(
        <Grid>
            <Panel className="withMargin" header="Ενέργειες" bordered>
                <Row>
                    <Col xs={24} md={12}>
                        <Input value={reportURL} readonly/>
                        <Button appearance="primary" onClick={()=>{
                            var reportURL = generalConstants.siteURL+"/inspections/report?userID=" + Cookies.get("userID") +"&inspections=" + props.filteredInspections.map(e=>e.inspectionNumber)
                            setReportURL(reportURL)
                            navigator.clipboard.writeText(reportURL)
                            Alert.success("Ο σύνδεσμος αντιγράφηκε με επιτυχία")
                        }}>Εξαγωγή αναφοράς προβαλόμενων επιθεωρήσεων</Button>
                    </Col>
                </Row>
            </Panel>
        </Grid>
    )
}