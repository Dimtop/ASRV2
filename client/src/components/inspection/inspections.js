import React, {useState,useEffect} from 'react';

//Styles
import "../../styles/main.style.css";

//Components
import InspectionTile from './inspectionTile';
import InspectionFilters from './inspectionFilters'
import { Alert,Grid,Row,Col } from 'rsuite';
//Libraries
import Cookies from 'js-cookie'

//Helpers
import {getInspections,getSprayer,getPreInspection} from "../../helpers/dataManager"




export default function Inspections(){

    const [inspections,setInspections] = useState([]);
    const [filteredInspections,setFilteredInspections] = useState([])
    const [sprayers,setSprayers] = useState([])

    useEffect(async ()=>{
        var inspectionsData = await getInspections("?userID=" + Cookies.get("userID"))

        
        if(inspectionsData.error){
            Alert.error("Υπήρξε ένα πρόβλημα");
            return;
        }

        var sprayers = [];
        for(var inspection of inspectionsData.inspections){

            var preInspectionData =await getPreInspection(inspection.preInspectionID)
            if(preInspectionData.error){
                Alert.error("Υπήξρε ένα πρόβλημα");
                break;
            }

            var sprayerData = await getSprayer(preInspectionData.preInspection.sprayerID);
            if(sprayerData.error){
                Alert.error("Υπήξρε ένα πρόβλημα");
                break;
            }
            sprayers.push(sprayerData.sprayer)
        }

        setSprayers(sprayers)
        setInspections(inspectionsData.inspections);
        setFilteredInspections(inspectionsData.inspections)
    },[])

    return(
        <>
            <InspectionFilters sprayers={sprayers} setFilteredInspections={setFilteredInspections} inspections={inspections}/>
            <Grid className="withMargin">
                <Row>
                    {
                        filteredInspections.map(pi=>{
                            return(
                                <InspectionTile key={pi._id} inspection={pi}/>
                            )
                        })
                    }

                </Row>
            </Grid>
         

        </>
    )
}