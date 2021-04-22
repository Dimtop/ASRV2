import React, {useState,useEffect} from 'react';

//Components
import {Row,Col,Panel,Grid,Button} from 'rsuite';

//Styles
import "../../styles/main.style.css"


export default function CustomerTile(props){

    return(
        <>  
            <Col xs={24} md={8} >
                <Panel className="tilePanel" bordered header={props.customer.name}>
    
                    <p>{props.customer.AFM}</p> 
                    <Button appearance="primary" onClick={()=>location.replace("/customers/" + props.customer._id)}>Προβολή</Button>        
                </Panel>
            </Col>
        </>

    );

}