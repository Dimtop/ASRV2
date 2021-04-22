import React, {useState,useEffect} from 'react';

//Helpers
import {getSprayers} from '../../helpers/dataManager';

//Libraries
import Cookies from 'js-cookie'

//Components
import {Alert,Grid,Row,Button,Col} from 'rsuite'
import SprayerTile from './sprayerTile'
import SprayerFilters from './sprayerFilters'

export default function Sprayers(props){

    const [sprayers,setSprayers] = useState([]);
    const [filteredSprayers,setFilteredSprayers] = useState([])
  


    useEffect(async ()=>{ 
        var sprayersData = await getSprayers("?userID=" + Cookies.get("userID"))

        if(sprayersData.error){
            Alert.error(sprayersData.error)
        }
        else{
            setSprayers(sprayersData.sprayers)
            setFilteredSprayers(sprayersData.sprayers)
        }

        
    },[])


    return(
        <>
        <SprayerFilters sprayers={sprayers} setFilteredSprayers={setFilteredSprayers}/>
        <Grid className="withMargin">
            <Row>
                {
                    filteredSprayers.map(sprayer=>{
                        return(
                            <SprayerTile sprayer={sprayer}/>
                        )
                    })
                }
                <Col xs={24} md={8}>
                    <Button appearance="primary" onClick={()=>location.replace("/sprayers/new")}>Προσθήκη νέου</Button>
                </Col>
            </Row>

        </Grid>
        </>
    );
}