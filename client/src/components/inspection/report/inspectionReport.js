import React, {useState,useEffect} from 'react';

//Helpers
import {getInspection,getPreInspection,getSprayer,getCustomer,getUser,getCategory,getAllCategories} from '../../../helpers/dataManager'
import getIDFromURL from '../../../helpers/getIDFromURL'
import getDateString from '../../../helpers/getDateString'
import extractTechnicalReportFromSprayer from '../../../helpers/extractTechnicalReportFromSprayer'
import getNozzlesNumberFromSprayer from '../../../helpers/getNozzlesNumberFromSprayer'
//Components
import ReportTechnicalReport from './reportTechnicalReport'
import FlowmeterVolumeRateOfChangeReport from './measurements/flowmeterVolumeRateOfChangeReport'
import PressureMaintenanceUponStopReport from './measurements/pressureMaintenanceUponStopReport'
import PressureMaintenanceUponSprayingStopReport from './measurements/pressureMaintenanceUponSprayingStopReport'
import PumpSupplyReport from './measurements/pumpSupplyReport'
import NozzlesDistanceReport from './measurements/nozzlesDistanceReport'
import ArmSymmetryReport from './measurements/armSymmetryReport'
import AirPressureReport from './measurements/airPressureReport'
import PressureIndicatorPrecisionReport from './measurements/pressureIndicatorPrecisionReport'
import PressureMaintenanceReport from './measurements/pressureMaintenanceReport'
import PumpVibrationsReport from './measurements/pumpVibrationsReport'
import ArmDistanceHorizontalReport from './measurements/armDistanceHorizontalReport'
import ArmDistanceVerticalReport from './measurements/armDistanceVerticalReport'
import NozzlesOrientationReport from './measurements/nozzlesOrientationReport'
import NozzlesSupplyReport from './measurements/nozzlesSupplyReport'
import MeshOpeningReport from './measurements/meshOpeningReport'
import PressureDistributionReport from './measurements/pressureDistributionReport'
import PressureDropReport from './measurements/pressureDropReport'
import PressureIndicatorDiameterReport from './measurements/pressureIndicatorDiameterReport'
//Libraries
import Cookies from 'js-cookie';



//Models

//Styles
import "../../../styles/inspection/report/report.css"



export default function InpsectionReport(){

    const [inspection,setInspection] = useState({technicalReport:{}})
    const [preInspection,setPreInspection] = useState({})
    const [sprayer,setSprayer] = useState({branches:[{injectors:[]}]})
    const [category,setCategory] = useState({})
    const [categories,setCategories] = useState([])
    const [technicalReport,setTechnicalReport] = useState([])
    const [customers,setCustomers] = useState([])
    const [user,setUser] = useState({})

    useEffect(async ()=>{

  
        var customers =[];

        var inspectionData = await getInspection(getIDFromURL("inspections"));
        if(inspectionData.error){
            Alert.error("Υπήρξε ένα πρόβλημα")
            return;
        }

        var preInspectionData = await getPreInspection(inspectionData.inspection.preInspectionID);
        if(preInspectionData.error){
            Alert.error("Υπήρξε ένα πρόβλημα")
            return;
        }
        var sprayerData =await getSprayer(preInspectionData.preInspection.sprayerID);
        if(sprayerData.error){
            Alert.error("Υπήρξε ένα πρόβλημα")
            return;
        }

        var categoryData = await getCategory(sprayerData.sprayer.categoryID);
        if(categoryData.error){
            Alert.error("Υπήρξε ένα πρόβλημα")
            return;
        }

        var categoriesData = await getAllCategories();
        if(categoriesData.error){
            Alert.error("Υπήρξε ένα πρόβλημα")
            return;
        }

        for(var customer of sprayerData.sprayer.customers){
            var currCustomerData = await getCustomer(customer.customerID)
            if(currCustomerData.error){
                Alert.error("Υπήρξε ένα πρόβλημα")
                return;
            }
            customers.push(currCustomerData.customer)
        }

        var userData = await getUser(Cookies.get("userID"))
        document.title = userData.user.region +" " + userData.user.IDNumber + " " + inspectionData.inspection.inspectionNumber

        console.log(inspectionData.inspection)
        setInspection(inspectionData.inspection);
        setPreInspection(preInspectionData.preInspection)
        setSprayer(sprayerData.sprayer)
        setCategory(categoryData.category)
        setCategories(categoriesData.categories)
        setCustomers(customers);
        setUser(userData.user)
        setTechnicalReport(extractTechnicalReportFromSprayer(sprayerData.sprayer,categoriesData.categories))
    })


    return(
      
   
        <div style={{width:"100%",backgroundColor:"white",height:"auto"}}>
        <div style={{width:"100%", height:"100vh",backgroundColor:"white"}} >  
            <div style={{textAlign:"center"}}>
                <img style={{width:"200px",height:"100px"}} src={user.logo}/>
            </div>
            <p style={{color:"gray",fontSize:"1rem",fontWeight:"bold",textAlign:"center"}}>{"Αριθμός μητρώου ΣΤΕΕΓΦ " + user.region + " " + user.IDNumber}</p>
            <h3 style={{color:"black",textAlign:"center"}}>ΠΙΣΤΟΠΟΙΗΤΙΚΟ ΕΠΙΘΕΩΡΗΣΗΣ</h3>
            <p style={{color:"black",textAlign:"center"}}>Επιθεωρήθηκε σύμφωνα με τις απαιτήσεις της οδηγίας 2009/128/ΕΕ</p>

            <p style={{color:"black",fontWeight:"bold",marginTop:"2rem"}}>Στοιχεία Εξοπλισμού Εφαρμογής Γεωργικών Φαρμάκων:</p>
            <ul>
                <li style={{color:"black"}}>
                    <p style={{color:"black"}}><b>Κατηγορία ΕΕΓΦ: </b>{category.name}</p>
                </li>
                <li style={{color:"black"}}>
                    <p style={{color:"black"}}><b>Αριθμός σειράς: </b>{sprayer.serialNumber}</p>
                </li>
            </ul>

            <p style={{color:"black",fontWeight:"bold",marginTop:"2rem"}}>Στοιχεία ιδιοκτητών</p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
                {
                    customers.map((customer,customerIndex)=>{
                        return(
                        <div>
                            <ul>
                                <li style={{color:"black"}}>
                                    <p style={{color:"black"}}><b>Ονοματεπώνυμο: </b>{customer.name}</p>
                                </li>
                                <li style={{color:"black"}}>
                                    <p style={{color:"black"}}><b>Διεύθυνση: </b>{customer.address}</p>
                                </li>
                                <li style={{color:"black"}}>
                                    <p style={{color:"black"}}><b>ΑΦΜ: </b>{customer.AFM}</p>
                                </li>
                                <li style={{color:"black"}}>
                                    <p style={{color:"black"}}><b>Τηλέφωνο: </b>{customer.phone}</p>
                                </li>
                                <li style={{color:"black"}}>
                                    <p style={{color:"black"}}><b>Ποσοστό ιδιοκτησίας: </b>{sprayer.customers[customerIndex].ownershipPercentage + "%"}</p>
                                </li>
                            </ul>
                        </div>
                        )
                    })
                }
              
            </div>
            <p style={{color:"black",fontWeight:"bold",marginTop:"2rem"}}>Στοιχεία Επιθεώρησης:</p>
            <ul>
                <li style={{color:"black"}}>
                    <p style={{color:"black"}}><b>Ημερομηνία: </b>{getDateString(inspection.date)}</p>
                </li>
                <li style={{color:"black"}}>
                    <p style={{color:"black"}}><b>Επιτυχής/Μη επιτυχής: </b>{inspection.result<2?"Επιτυχής":"Μη επιτυχής"}</p>
                </li>
                <li style={{color:"black"}}>
                    <p style={{color:"black"}}><b>Ισχύς μέχρι: </b>{getDateString(new Date(inspection.date).setFullYear(new Date(inspection.date).getFullYear()+3))}</p>
                </li>
                <li style={{color:"black"}}>
                    <p style={{color:"black"}}><b>Ένταξη σε κατηγορία:</b></p>
                    <table>
                        <tr>
                            <td>Κατηγορία Ι</td>
                            <td className="inspectionResultTD" style={{border:"1px solid black",marginLeft:"1rem"}}>
                                <p >{inspection.result==0?" x ":" "}</p>
                            </td>
                            {
                                inspection.result==0?
                                <td>user.region + " " + user.IDNumber +" " + inspection.stickerNumber</td>
                                :
                                <td>~</td>
                            }
                            
                        </tr>
                        <tr>
                            <td>Κατηγορία ΙI</td>
                            <td className="inspectionResultTD" style={{border:"1px solid black",marginLeft:"1rem"}}>
                                <p >{inspection.result==1?" x ":" "}</p>
                            </td>
                            {
                                inspection.result==1?
                                <td>user.region + " " + user.IDNumber +" " + inspection.stickerNumber</td>
                                :
                                <td>~</td>
                            }
                        </tr>
                        <tr>
                            <td>Κατηγορία ΙII</td>
                            <td className="inspectionResultTD" style={{border:"1px solid black",marginLeft:"1rem"}}>
                                <p >{inspection.result==2?" x ":" "}</p>
                            </td>
                            <td>~</td>
                        </tr>
                        <tr>
                            <td>Κατηγορία ΙV</td>
                            <td className="inspectionResultTD" style={{border:"1px solid black",marginLeft:"1rem"}}>
                                <p >{inspection.result==3?" x ":" "}</p>
                            </td>
                            <td>~</td>
                        </tr>
                    </table>
                    
                </li>
            </ul>
            <p style={{color:"black"}}><b>Παρατηρήσεις: βλ. σελίδα 2</b></p>
       
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",marginTop:"2rem"}}>
                <div style={{textAlign:"center"}}>
                <p style={{color:"black",marginTop:"2rem"}}><b>Ο ιδιοκτήτης:</b></p>
                    <p style={{color:"black"}}>
                        Έλαβα γνώση των αποτελεσμάτων της επιθεώρησης και
                        των αποκλίσεων τις οποίες πρέπει να αποκαταστήσω
                        σύμφωνα με τις υποδείξεις του ΣΤΕΕΓΦ και τα
                        προβλεπόμενα στις ισχύουσες διατάξεις.
                    </p>
                </div>
                <div></div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",marginTop:"2rem"}}>
                <div style={{textAlign:"center"}}>
                   
                    <p style={{color:"black"}}>Υπογραφή</p>
                </div>
                <div style={{textAlign:"center"}}>
                    <p style={{color:"black"}}>Υπογραφή</p>
                </div>
            </div>
            

         
        </div>
        <div style={{pageBreakBefore:"always",width:"100%",height:"100vh",backgroundColor:"white"}}>

            <p style={{color:"black"}}><b>Παρατηρήσεις:</b></p>
            <p style={{color:"black"}}>Σημειώνονται οι παρακάτω ελλείψεις/αποκλίσεις που πρέπει να αποκατασταθούν μέχρι την επόμενη επιθεώρηση:</p>

            {
                Object.entries(inspection.technicalReport).map((e,i)=>{
    
                    if(e[1].notes && e[1].notes!=""){
                    
                        return <p style={{color:"black"}}>{ e[0].replaceAll("_",".") +" " + e[1].notes}</p>
                    }

                })

            }


        </div>
        <div style={{pageBreakBefore:"always",width:"100%",height:"auto",backgroundColor:"white"}}>
        <h3 style={{color:'black',textAlign:"center"}}>Στοιχεία ιδιοκτήτη</h3>    
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
            {
                    customers.map((customer,customerIndex)=>{
                        return(
                        <div style={{marginTop:"2rem"}}>
                            <ul>
                                <li style={{color:"black"}}>
                                    <p style={{color:"black"}}><b>Ονοματεπώνυμο: </b>{customer.name}</p>
                                </li>
                                <li style={{color:"black"}}>
                                    <p style={{color:"black"}}><b>Διεύθυνση: </b>{customer.address}</p>
                                </li>
                                <li style={{color:"black"}}>
                                    <p style={{color:"black"}}><b>ΑΦΜ: </b>{customer.AFM}</p>
                                </li>
                                <li style={{color:"black"}}>
                                    <p style={{color:"black"}}><b>Τηλέφωνο: </b>{customer.phone}</p>
                                </li>
                                <li style={{color:"black"}}>
                                    <p style={{color:"black"}}><b>Ποσοστό ιδιοκτησίας: </b>{sprayer.customers[customerIndex].ownershipPercentage + "%"}</p>
                                </li>
                            </ul>
                        </div>
                        )
                    })
            }
            </div>
            <h3 style={{color:'black',textAlign:"center"}}>Στοιχεία εξοπλισμού</h3>
            <ul>
                <li style={{color:"black"}}>
                    <p style={{color:"black"}}><b>Κατηγορία ΕΕΓΦ: </b>{category.name + " " + sprayer.movementType}</p>
                </li>
                <li style={{color:"black"}}>
                    <p style={{color:"black"}}><b>Κατασκευαστής: </b>{sprayer.manufacturer}</p>
                </li>
                <li style={{color:"black"}}>
                    <p style={{color:"black"}}><b>Εμπορική ονομασία: </b>{sprayer.commercialName}</p>
                </li>
                <li style={{color:"black"}}>
                    <p style={{color:"black"}}><b>Αριθμός σειράς: </b>{sprayer.serialNumber}</p>
                </li>
                <li style={{color:"black"}}>
                    <p style={{color:"black"}}><b>Παλαιότητα σε έτη: </b>{sprayer.age}</p>
                </li>
                <li style={{color:"black"}}>
                    <p style={{color:"black"}}><b>Δήλωση πιστότητας: </b>{sprayer.ceCompliance?"NAI":"ΟΧΙ"}</p>
                </li>
                <li style={{color:"black"}}>
                    <p style={{color:"black"}}><b>Αριθμός δεξαμενών: </b>{sprayer.tanksNumber}</p>
                </li>
                <li style={{color:"black"}}>
                    <p style={{color:"black"}}><b>Αριθμός δεξαμενής: </b>{sprayer.totalTanksCapacity}</p>
                </li>
                <li style={{color:"black"}}>
                    <p style={{color:"black"}}><b>Αριθμός ακροφυσίων: </b>{getNozzlesNumberFromSprayer(sprayer)}</p>
                </li>
                <li style={{color:"black"}}>
                    <p style={{color:"black"}}><b>Μήκος βραχιόνων: </b>{sprayer.totalArmLength}</p>
                </li>
                <li style={{color:"black"}}>
                    <p style={{color:"black"}}><b>Αριθμός τομέων: </b>{sprayer.branches.length}</p>
                </li>
                <li style={{color:"black"}}>
                    <p style={{color:"black"}}><b>Περιφεριακή ενότητα: </b>{sprayer.region}</p>
                </li>
            </ul>  
        </div>
        <div style={{pageBreakBefore:"always",width:"100%",height:"auto",backgroundColor:"white"}}>
            
  

            <h3 style={{color:'black',textAlign:"center"}}>Έκθεση τεχνικού ελέγχου</h3>                    
            <table style={{tableLayout:"fixed"}}>
                <th className="tableGrayHeading" style={{width:"30%",padding:"1rem"}}>Απαίτηση</th>
                <th className="tableGrayHeading" style={{width:"10%",padding:"1rem"}}>Ικανοποίηση απαιτήσεων</th>
                <th className="tableGrayHeading" style={{width:"20%",padding:"1rem"}}>Αποκλίσεις</th>
                <th className="tableGrayHeading" style={{width:"40%",padding:"1rem"}}>Παρατηρήσεις</th>
            <ReportTechnicalReport technicalReport={technicalReport} inspection={inspection}/>
            </table>
    
           
            

        </div>
   
        {
            category.code=="bc"?
            <div style={{pageBreakBefore:"always",width:"100%",height:"auto",backgroundColor:"white"}}>
                <h3 style={{color:'black',textAlign:"center"}}>Μετρητικοί έλεγχοι</h3> 
            <PumpSupplyReport inspection={inspection} paragraph={"2_1_1"}/>
            <PumpVibrationsReport inspection={inspection} paragraph={"2_2"}/>
            <AirPressureReport inspection={inspection} paragraph={"2_3_2"}/>
            <MeshOpeningReport inspection={inspection} paragraph={"4_3_1"}/>
            <PressureIndicatorPrecisionReport inspection={inspection} sprayer={sprayer} paragraph={"5_2_3"}/>
            <PressureIndicatorDiameterReport inspection={inspection} paragraph={"5_2_4"}/>
            <PressureMaintenanceReport inspection={inspection} paragraph={"5_4_1"}/>
            <PressureMaintenanceUponSprayingStopReport inspection={inspection} paragraph={"5_4_2"}/>
            <ArmSymmetryReport inspection={inspection} paragraph={"8_1_2"}/>
            <NozzlesDistanceReport inspection={inspection} paragraph={"8_3_1"}/>
            <NozzlesOrientationReport  inspection={inspection} paragraph={"8_3_2"}/>
            <ArmDistanceVerticalReport inspection={inspection} paragraph={"8_4_1"}/>
            <ArmDistanceHorizontalReport inspection={inspection} paragraph={"8_4_2"}/>
            <PressureMaintenanceUponStopReport inspection={inspection} paragraph={"8_8"}/> 
            <PressureDropReport inspection={inspection} paragraph={"8_9"}/>
            <NozzlesSupplyReport inspection={inspection} paragraph={"9_3_2_a"}/>
            <FlowmeterVolumeRateOfChangeReport inspection={inspection} paragraph={"5_3"}/>      
            <PressureDistributionReport inspection={inspection} paragraph={"9_3_2_b"} refParagraph={"8_9"}/>
            </div>
            :
            category.code=="nf"?
            <div style={{pageBreakBefore:"always",width:"100%",height:"auto",backgroundColor:"white",textAlign:"center"}}>
                <h3 style={{color:'black',textAlign:"center"}}>Μετρητικοί έλεγχοι</h3> 
            <PumpSupplyReport inspection={inspection} paragraph={"2_1_1"}/>
            <PumpVibrationsReport inspection={inspection} paragraph={"2_2"}/>
            <AirPressureReport inspection={inspection} paragraph={"2_3_2"}/>
            <MeshOpeningReport inspection={inspection} paragraph={"4_3_1"}/>
            <PressureIndicatorPrecisionReport inspection={inspection} sprayer={sprayer} paragraph={"5_2_3"}/>
            <PressureIndicatorDiameterReport inspection={inspection} paragraph={"5_2_4"}/>
            <PressureMaintenanceReport inspection={inspection} paragraph={"5_4_1"}/>
            <PressureMaintenanceUponSprayingStopReport inspection={inspection} paragraph={"5_4_2"}/>
            <PressureDropReport inspection={inspection} paragraph={"9_1"}/>
            <PressureMaintenanceUponStopReport inspection={inspection} paragraph={"9_2"}/> 
            <NozzlesSupplyReport inspection={inspection} paragraph={"9_3_2_a"}/>
            <FlowmeterVolumeRateOfChangeReport inspection={inspection} paragraph={"5_3"}/>  
            <PressureDistributionReport inspection={inspection} paragraph={"9_3_2_b"} refParagraph={"9_1"}/> 
            </div>
            :
            category.code=="mv"?
            <div style={{pageBreakBefore:"always",width:"100%",height:"auto",backgroundColor:"white"}}>
                <h3 style={{color:'black',textAlign:"center"}}>Μετρητικοί έλεγχοι</h3> 
            <PumpSupplyReport inspection={inspection} paragraph={"2_1_2_a"}/>
            <PumpVibrationsReport inspection={inspection} paragraph={"2_2"}/>
            <AirPressureReport inspection={inspection} paragraph={"2_3_2"}/>
            <MeshOpeningReport inspection={inspection} paragraph={"4_3_1"}/>
            <PressureIndicatorPrecisionReport inspection={inspection} sprayer={sprayer} paragraph={"5_2_6"}/>
            <PressureIndicatorDiameterReport inspection={inspection} paragraph={"5_2_4"}/>
            <PressureMaintenanceReport inspection={inspection} paragraph={"5_4_1"}/>
            <PressureMaintenanceUponSprayingStopReport inspection={inspection} paragraph={"5_4_2"}/>
            <ArmDistanceVerticalReport inspection={inspection} paragraph={"8_2_1_b"}/>
            <ArmDistanceHorizontalReport inspection={inspection} paragraph={"8_2_1_c"}/>
            <NozzlesDistanceReport inspection={inspection} paragraph={"8_2_2_b"}/>
            <NozzlesOrientationReport  inspection={inspection} paragraph={"8_2_2_c"}/>
            <PressureMaintenanceUponStopReport inspection={inspection} paragraph={"8_2_5"}/> 
            <PressureDropReport inspection={inspection} paragraph={"8_2_6"}/>
            <NozzlesSupplyReport inspection={inspection} paragraph={"10_2"}/>
            <FlowmeterVolumeRateOfChangeReport inspection={inspection} paragraph={"5_3"}/>  
            <PressureDistributionReport inspection={inspection} paragraph={"10_3_2"} refParagraph={"8_2_6"}/> 
            </div>

            :
            <></>
        }
          
    
        </div>    
   
    )
}


function renderTechnicalReport(e){

    if(e){
 
        for(var i=0;i<e.length;i++){
        
            var p= e[i].paragraphs?e[i].paragraphs.length:0;
            
            if(p>0){
                       
                renderTechnicalReport(e.paragraphs)
            }
            console.log("TITLE")
            console.log(e)
        }
    
        
    }
    
}

 
