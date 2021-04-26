import React, {useState, useEffect} from 'react';
//Styles
import '../../styles/main.style.css'
//Libraries
import { Input,InputPicker,Panel,Grid,Row,Col,Button,Alert} from 'rsuite';
//Data
import {regions,mapToPickerData} from '../../data/regions';
import {stationTypes} from '../../data/stationTypes';

//Helpers
import {getUser,updateUser} from '../../helpers/dataManager';
import { update } from '../../../../server/models/user.model';

//Components
import History from '../utils/history'

export default function Profile(){


    //History
    History.push("/profile")
    
    const [user,setUser] = useState({});

    useEffect(async ()=>{
        var userData = await getUser();

        if(userData.error){
            Alert.warning(userData.error);
            return;
        }
        setUser(userData.user);
        console.log(user);
    },[])


    return(
        <Panel header="Στοιχεία σταθμού" bordered>
            <Grid fluid>
                <Row>
                    <Col xs={24} >
                        <p className="label">Επωνυμία</p>
                        <Input value={user.name} onChange={value=>setUser({...user,name:value})}/>
                    </Col>
                </Row>

                <Row>
                    <Col xs={24}>

                        <p className="label">Αντικείμενο εργασιών</p>
                        <Input value={user.field} onChange={value=>setUser({...user,field:value})}/>
                    </Col>
                    <Col xs={24}>
                        
                        <p className="label">Περιφέρεια</p>
                        <InputPicker data={mapToPickerData()} value={user.region} onChange={value=>setUser({...user,region:value})}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24}>
                        <p className="label">Τύπος</p>
                        <InputPicker data={stationTypes} value={user.stationType} onChange={value=>setUser({...user,stationType:value})}/>
                    </Col>

                    <Col xs={24}>
                        <p className="label">ΑΦΜ</p>
                        <Input  value={user.AFM} onChange={value=>setUser({...user,AFM:value})}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24}>
                        <p className="label">ΔΟΥ</p>
                        <Input  value={user.DOI} onChange={value=>setUser({...user,DOI:value})}/>
                    </Col>
                    <Col xs={24}>

                        <p className="label">Διεύθυνση</p>
                        <Input  value={user.address} onChange={value=>setUser({...user,address:value})}/>
                    </Col>
                </Row>
                <Row>
                
                    <Col xs={24}>
                        <p className="label">Email</p>
                        <Input  type="email" value={user.email} onChange={value=>setUser({...user,email:value})}/>
                    </Col>
                    <Col xs={24}>

                        <p className="label">Τηλέφωνο</p>
                        <Input  value={user.phone} onChange={value=>setUser({...user,phone:value})}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24}>
                        <p className="label">Υπεύθυνος επιθεωρητής</p>
                        <Input  value={user.inspector} onChange={value=>setUser({...user,inspector:value})}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24}>
                        <Button appearance="primary" onClick={async ()=>await updateUser(user).then(location.reload())}>Ενημέρωση</Button>
                    </Col>
                </Row>
            </Grid>
        </Panel>
    );
}