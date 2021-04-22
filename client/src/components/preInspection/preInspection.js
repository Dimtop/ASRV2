import React, {useState,useEffect} from 'react'


//Styles
import "../../styles/main.style.css"
//Components
import {Grid,Row,Col,Toggle,Panel,Button, Alert,DatePicker} from "rsuite";


//Data
import preInspectionData from '../../data/preInspection'

//Models
import preInspectionModel from '../../models/preInspection.model'
import preInspectionDBModel from '../../models/preInspectionDB.model'
//Helpers
import {createPreInspection,getPreInspection,updatePreInspection} from '../../helpers/dataManager'
import getIDFromURL from '../../helpers/getIDFromURL'

//Libraries
import Cookies from 'js-cookie';

export default function PreInspection(props){

    const [preInspection,setPreInspection] = useState(preInspectionModel)
    const [preInspectionFromDB,setPreInspectionFromDB] = useState(preInspectionDBModel);

    useEffect(async ()=>{
        if(!props.new){
            var preInspectionData = await getPreInspection(getIDFromURL("preInspections"));
            if(preInspectionData.error){
                Alert.error("Υπήρξε ένα πρόβλημα");
                return
            }

            setPreInspection(preInspectionData.preInspection.data)
            setPreInspectionFromDB(preInspectionData.preInspection)
        }
    },[])

    return(

        <>
            <Grid>
                <Row>
                    
                </Row>
                <Row>
                    <Col xs={24} className="centerText">
                        <h4>Έκθεση Προκαταρκτικής Επιθεώρησης Εξοπλισμού Εφαρμογής Γεωργικών Φαρμάκων σύμφωνα με το ΠΑΡΑΡΤΗΜΑ Γ του Ν.4036/2012 και το πρότυπο ΕΝ ISO 16122-1:2015</h4>
                        <p>Στον πίνακα που ακολουθεί παραθέτονται οι απαιτήσεις που πρέπει να πληρούνται κατά την προκαταρκτική επιθεώρηση. Η ικανοποίηση όλων αυτών των απαιτήσεων, αποτελεί απαραίτητη προϋπόθεση για τη συνέχιση της επιθεώρησης.  </p>
                    </Col>
                </Row>
                <Row>
                    {
                        preInspectionData.map(e=>{
                            console.log(preInspection["1.1"])
                            return(
                                <Col xs={24} key={e.code}>
                                    <Panel header={e.code + ". " + e.title} bordered collapsible className="withMargin">
                                        <Row>
                                            {
                                                e.paragraphs.map(p=>{
                                                    return(
                                                        <Col xs={24} md={24} key={p.code}>
                                                            <Panel header={p.code + ". " + p.title}  bordered className="withMargin">
                                                                <p>Ικανοποίηση απαιτήσεων</p>
                                                                <Toggle checkedChildren="ΝΑΙ" unCheckedChildren="ΟΧΙ" checked={preInspection[p.code.replace(".","_")]} onChange={value=>setPreInspection(changePreInspectionParagraphValue(preInspection,p.code.replace(".","_"),value))}/>
                                                            </Panel>
                                                        </Col>
                                                    )
                                                })
                                            }
                                        </Row>
                                      
                                    </Panel>
                                </Col>
                            );
                        })
                    }
                </Row>
                <Panel header="Λοιπά στοιχεία προεπιθεώρησης" bordered className="withMargin">
                    <Row>
                        <Col xs={24}>
                            <p>Ημερομηνία προεπιθεώρησης</p>
                            <DatePicker value={preInspectionFromDB.date} onChange={value=>setPreInspectionFromDB({...preInspectionFromDB,date:value})}/>
                        </Col>
                    </Row>
                </Panel>
                <Panel header="Ενέργειες" bordered className="withMargin">
                    <Row>
                        <Col xs={24} md={12}>
                            <Button appearance="primary" 
                                onClick={
                                    props.new?
                                        async() => await createPreInspection({userID:Cookies.get("userID"),data: preInspection,sprayerID:  new URLSearchParams(window.location.search).get("sprayerID"),date:preInspectionFromDB.date}).then(res=>res.error?Alert.error("Υπήρξε ένα πρόβλημα"):location.replace("/preInspections/" + res.preInspection._id))
                                    :
                                        async() => await updatePreInspection({...preInspectionFromDB,data:preInspection,userID:Cookies.get("userID")}).then(res=>res.error?Alert.error("Υπήρξε ένα πρόβλημα"):location.reload())
                                   
                                }
                            >
                                Αποθήκευση
                            </Button>
                        </Col>
                        <Col xs={24} md={12}>
                            <Button appearance="primary" disabled={props.new} onClick={async() => {
                                var check =checkIfEligibleForInspection(preInspection);
                                console.log(check)
                                if(check.result){
                                    await updatePreInspection({...preInspectionFromDB,data:preInspection,userID:Cookies.get("userID")}).then(res=>res.error?Alert.error("Υπήρξε ένα πρόβλημα"):location.replace("/inspections/new?preInspectionID="+preInspectionFromDB._id));

                                }
                                else{
                                    Alert.error("Δεν μπορείτε να προβείτε σε επιθεώρηση. Διορθώστε την παράγραφο " + check.error)
                                }
                            }
                                
                                
                            }>
                                Διενέργεια επιθεώρησης
                            </Button>
                        </Col>
                    </Row>
                </Panel>
            </Grid>

        </>
    );
}


function changePreInspectionParagraphValue(preInspection,code,value){
    preInspection[code] = value;
    return {...preInspection}
}

function checkIfEligibleForInspection(preInspection){
    for(const [key, value] of Object.entries(preInspection)){
        if(!value){
            return {
                result:false,
                error:key.replace("_",".")
            };
        }
    }

    return {
        result:true
    };
}