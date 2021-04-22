import React, {useState,useEffect} from 'react';

//Helpers
import {getPreInspection,getSprayer,getAllCategories,createInspection,getInspection,updateInspection} from '../../helpers/dataManager';
import extractTechnicalReportFromSprayer from '../../helpers/extractTechnicalReportFromSprayer'
import extractCategoryFromSprayer from '../../helpers/extractCategoryFromSprayer'
import retreiveInspectionResult from '../../helpers/retreiveInspectionResult'
import getIDFromURL from '../../helpers/getIDFromURL'


//Components
import {Alert,Grid,Row,Col,Panel,Button,Toggle, DatePicker,InputPicker,Input} from 'rsuite';
import InspectionTechnicalReport from './inspectionTechnicalReport';
import InpsectionMeasurements from './inspectionMeasurements'

//Models
import getInspectionModel from '../../models/inspection.model'
import sprayerModel from'../../models/sprayer.model';

//Data
import inspectionTypes from '../../data/inspectionTypes'

//Libraries
import Cookies from 'js-cookie';


//Styles
import "../../styles/app.css"
import "../../styles/main.style.css"

export default function Inspection(props){

    const [inspection,setInspection] = useState({})
    const [preInspection,setPreInspection] = useState({})
    const [sprayer,setSprayer] = useState(sprayerModel)
    const [technicalReportData,setTechnicalReportData] = useState([]);
    const [categories,setCategories] = useState([])

    useEffect(async ()=>{

        //GETTING THE CATEGORIES
        var categoriesData = await getAllCategories();
        if(categoriesData.error){
            Alert.error("Υπήρξε ένα πρόβλημα");
            return;
        }

        if(props.new){
                //GETTING THE PREINSPECTION
                var preInspectionID = new URLSearchParams(window.location.search).get("preInspectionID");
                var preInspectionData =await getPreInspection(preInspectionID);
                if(preInspectionData.error){
                    Alert.error("Υπήρξε ένα πρόβλημα");
                    return;
                }

                //GETTING THE SPRAYER
                var sprayerData = await getSprayer(preInspectionData.preInspection.sprayerID);
                if(sprayerData.error){
                    Alert.error("Υπήρξε ένα πρόβλημα");
                    return;
                }

          

                setInspection(getInspectionModel(sprayerData.sprayer,extractCategoryFromSprayer(sprayerData.sprayer,categoriesData.categories)))
        }
        else{
            var inspectionData = await getInspection(getIDFromURL("inspections"));
            console.log(inspectionData)
            if(inspectionData.error){
                Alert.error("Υπήρξε ένα πρόβλημα");
                return;
            }

            var preInspectionData =await getPreInspection(inspectionData.inspection.preInspectionID);
            if(preInspectionData.error){
                Alert.error("Υπήρξε ένα πρόβλημα");
                return;
            }

            var sprayerData = await getSprayer(preInspectionData.preInspection.sprayerID);
            if(sprayerData.error){
                Alert.error("Υπήρξε ένα πρόβλημα");
                return;
            }

            setInspection(inspectionData.inspection)
        }
         
        setTechnicalReportData(extractTechnicalReportFromSprayer(sprayerData.sprayer,categoriesData.categories))
        setCategories(categoriesData.categories)
        setSprayer(sprayerData.sprayer)
        setPreInspection(preInspectionData.preInspection)

         
        

    },[])

    console.log("INSPECTION")
    console.log(inspection)
    return(
        <>

        <Button appearance="primary" onClick={()=>console.log(retreiveInspectionResult(inspection,extractCategoryFromSprayer(sprayer,categories)))}>test</Button>
            <Grid>
                <Row>
                    <Col xs={24} className="centerText">
                        <h4>Έκθεση Τεχνικού Ελέγχου ψεκαστήρα μεγάλων καλλιεργειών (ψεκαστήρα οριζόντιου ιστού) σύμφωνα με το ΠΑΡΑΡΤΗΜΑ Γ του Ν.4036/2012 και το πρότυπο ΕΝ ISO 16122-2:2015</h4>
                        <p>Στον πίνακα που ακολουθεί παραθέτονται όλες οι απαιτήσεις που πρέπει να πληρούνται, ενώ σημειώνεται με την ένδειξη «x» εάν κατά την επιθεώρηση γίνεται οπτικός έλεγχος, δοκιμή λειτουργίας ή εάν απαιτείται μέτρηση. </p>
                    </Col>
                </Row>
                <Row>
                    <InspectionTechnicalReport technicalReport={technicalReportData} inspection={inspection} setInspection={setInspection}/>
                </Row>
                <Row>
                    <Col xs={24} className="centerText">
                        <h4>Μετρητικοί έλεγχοι</h4>
                    </Col>
                  
                    <InpsectionMeasurements sprayer={sprayer} categories={categories} inspection={inspection} setInspection={setInspection}/>

                </Row>
                <Row>
                  
                    <Col xs={24}>
                        <Panel header="Λοιπά στοιχεία επιθεώρησης" bordered className="withMargin">
                            <Grid fluid>
                                <Row>
                                    <Col xs={24} md={8}>
                                        <p>Ημερομηνία επιθεώρησης</p>
                                        <DatePicker className="fullWidth" value={inspection.date} onChange={(value)=>setInspection({...inspection,date:value})}/>
                                    </Col>
                                    <Col xs={24} md={8}>
                                        <p>Τύπος επιθεώρησης</p>
                                        <InputPicker data={inspectionTypes} value={inspection.type} onChange={(value)=>setInspection({...inspection,type:value})}/>
                                    </Col>
                                    <Col xs={24} md={8}>
                                        <p>Αριθμός επιθεώρησης</p>
                                        <Input value={inspection.inspectionNumber} onChange={(value)=>setInspection({...inspection,inspectionNumber:value})}/>
                                    </Col>
                                    <Col xs={24} md={8}>
                                        <p>Αριθμός sticker</p>
                                        <Input value={inspection.stickerNumber} onChange={(value)=>setInspection({...inspection,stickerNumber:value})}/>
                                    </Col>
                                    <Col xs={24} md={8}>
                                        <p>Ένταξη σε κατηγορία 4</p>
                                        <Toggle checked={inspection.inadequateCategory} onChange={(value)=>setInspection({...inspection,inadequateCategory:value})}/>
                                    </Col>
                                </Row>
                            </Grid>
                   
                        </Panel>
                        <Panel header="Ενέργειες" bordered className="withMargin">
                            <Grid fluid>
                                <Row>
                                    <Col xs={24} md={12}>
                                        <Button appearance="primary"
                                        
                                        onClick={async ()=>
                                            props.new?
                                                await createInspection({...inspection,userID:Cookies.get("userID"),preInspectionID: new URLSearchParams(window.location.search).get("preInspectionID"),result:retreiveInspectionResult(inspection,extractCategoryFromSprayer(sprayer,categories)).result}).then(res=>res.error?Alert.error(res.error):location.replace("/inspections/" + res.inspection._id))
                                            :
                                                await updateInspection({...inspection,userID:Cookies.get("userID"),result:retreiveInspectionResult(inspection,extractCategoryFromSprayer(sprayer,categories)).result}).then(res=>res.error?Alert.error(res.error):location.reload())

                                        }
                                        >
                                            Αποθήκευση
                                        </Button>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <Button appearance="primary" disabled={props.new}>Προβολή αναφοράς</Button>
                                    </Col>
                                </Row>
                            </Grid>
                        </Panel>
                    </Col>

           
                </Row>

           
            </Grid>
        </>
    );
}


function renderTechnicalReport(technicalReport){
    for(var i=0;i<technicalReport.length;i++){
        if(technicalReport[i].paragraphs.length==0){
            console.log(technicalReport[i].code)
            renderTechnicalReport(technicalReport[i].paragraphs)
        }else{
            return(
                <>
                    <Col xs={24} md={24} key={technicalReport[i].code}>
                        <Panel header={technicalReport[i].code + ". " + technicalReport[i].title}  bordered className="withMargin">
                            <p>Ικανοποίηση απαιτήσεων</p>                                                             
                        </Panel>
                    </Col>
    
    
                </>
            )
        }
    }
   
}

