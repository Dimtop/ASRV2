import React, {useState,useEffect} from 'react';

//Styles
import "../../styles/main.style.css";

//Components
import PreInspectionTile from './preInspectionTile';
import PreInspectionFilters from './preInspectionFilters'
import { Alert,Grid,Row,Col } from 'rsuite';
import History from '../utils/history'
//Libraries
import Cookies from 'js-cookie'

//Helpers
import {getPreInspections,getSprayer} from "../../helpers/dataManager"



export default function PreInspections(){

    //History
    History.push("/preInspections")

    const [preInspections,setPreInspections] = useState([]);
    const [filteredPreInspections,setFilteredPreInspections] = useState([])
    const [sprayers,setSprayers] = useState([])

    useEffect(async ()=>{
        var preInspectionsData = await getPreInspections("?userID=" + Cookies.get("userID"))
        console.log(preInspectionsData)
        
        if(preInspectionsData.error){
            Alert.error("Υπήρξε ένα πρόβλημα");
            return;
        }

        var sprayers = [];
        for(var preInspection of preInspectionsData.preInspections){
            var sprayerData = await getSprayer(preInspection.sprayerID);
            if(sprayerData.error){
                Alert.error("Υπήξρε ένα πρόβλημα");
                break;
            }
            sprayers.push(sprayerData.sprayer)
        }

        setSprayers(sprayers)
        setPreInspections(preInspectionsData.preInspections);
        setFilteredPreInspections(preInspectionsData.preInspections)
    },[])

    return(
        <>
            <PreInspectionFilters sprayers={sprayers} setFilteredPreInspections={setFilteredPreInspections} preInspections={preInspections}/>
            <Grid className="withMargin">
                <Row>
                    {
                        filteredPreInspections.map(pi=>{
                            return(
                                <PreInspectionTile key={pi._id} preInspection={pi}/>
                            )
                        })
                    }

                </Row>
            </Grid>
         

        </>
    )
}