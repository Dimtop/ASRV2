import { set } from 'js-cookie';
import React, {useState,useEffect} from 'react';

//Components
import { Alert } from 'rsuite';
import {Table} from 'rsuite';
const { Column, HeaderCell, Cell, Pagination } = Table;

//Helpers
import {getInspectionByInspectionNumber,getCustomer, getPreInspection,getSprayer,getCategory} from '../../../helpers/dataManager'

//Libraries
import Cookies from 'js-cookie'

export default function InspectionsReport(){
    
    const [inspections,setInspections] = useState([])
    const [preInspections,setPreInspections] = useState([])
    const [sprayers,setSprayers] = useState([])
    useEffect(async ()=>{
        var inspectionNumbers = new URLSearchParams(location.search).get("inspections").split(",")
        var tmpInspections = [];
        var tmpPreInspections = [];
        var tmpSprayers = [];
        var tmpCustomers = [];
        for(var i=0;i<inspectionNumbers.length;i++){
            var tmpInspectionData = await getInspectionByInspectionNumber(inspectionNumbers[i],new URLSearchParams(location.search).get("userID")) 
            console.log(tmpInspectionData)
            if(tmpInspectionData.error){
                Alert.error(tmpInspectionData.error);
                return;
            }
            tmpInspectionData.inspection.inspectionID = tmpInspectionData.inspection._id
            tmpInspections.push(tmpInspectionData.inspection)
        }

        for(var i=0;i<tmpInspections.length;i++){
            var preInspectionData = await getPreInspection(tmpInspections[i].preInspectionID);
            if(preInspectionData.error){
                Alert.error(preInspectionData.error);
                return;
            }
         
            tmpPreInspections.push(preInspectionData.preInspection)
        }

        for(var i=0;i<tmpPreInspections.length;i++){
            var sprayerData = await getSprayer(tmpPreInspections[i].sprayerID);
            if(sprayerData.error){
                Alert.error(sprayerData.error);
                return;
            }
            tmpInspections[i]= {...tmpInspections[i],...sprayerData.sprayer}
            tmpSprayers.push(sprayerData.sprayer)
        }

        for(var i=0;i<tmpSprayers.length;i++){
            tmpCustomers=[]
            for(var y=0;y<tmpSprayers[i].customers.length;y++){
                var tmpCustomerData = await getCustomer(tmpSprayers[i].customers[y].customerID);
                if(tmpCustomerData.error){
                    Alert.error(tmpCustomerData.error);
                    return;
                }
                tmpCustomers.push({...tmpCustomerData.customer,ownershipPercentage:tmpSprayers[i].customers[y].ownershipPercentage})
            }

            var tmpCategoryData =await getCategory(tmpSprayers[i].categoryID)
            if(tmpCategoryData.error){
                Alert.error(tmpCategoryData.error);
                return;
            }
            tmpSprayers[i].categoryName = tmpCategoryData.category.name
            tmpSprayers[i].customersName = tmpCustomers.map(e=>e.name).join(",")
            tmpSprayers[i].customersAFM = tmpCustomers.map(e=>e.AFM).join(",")
            tmpSprayers[i].customersPhone = tmpCustomers.map(e=>e.phone).join(",")
          
            tmpInspections[i]= {...tmpInspections[i],...tmpSprayers[i]}
        }

        //modifications
        tmpInspections = tmpInspections.map(e=>{return {...e,ceCompliance:e.ceCompliance?"ΝΑΙ":"ΟΧΙ"}})
        tmpInspections = tmpInspections.map(e=>{
            var injectorsNumber =0;
            console.log(e)
            for(var i=0;i<e.branches.length;i++){
                injectorsNumber+= e.branches[i].injectors.length;
            }
            return {
                ...e,
                injectorsNumber:injectorsNumber
            }
        })
        console.log(tmpInspections)
        setInspections(tmpInspections)
        setPreInspections(tmpPreInspections)
        setSprayers(tmpSprayers)
    },[])

    return (
      
        <>
        <h4 style={{textAlign:"center",marginBottom:"2rem"}}>Πίνακας καταγραφής εν χρήσει εξοπλισμού εφαρμογής γεωργικών φαρκάμων</h4>
        <div>
        <Table data={[...inspections]} headerHeight={75} autoHeight onRowClick={data => {console.log(data);}} wordWrap>
            <Column width={200} fixed align="center" >
                <HeaderCell>Αριθμός επιθεώρησης</HeaderCell>
                <Cell dataKey="inspectionNumber"/>
            </Column>
            <Column  width={200} align="center" >
                <HeaderCell>Ονοματεπώνυμο</HeaderCell>
                <Cell dataKey="customersName"/>
            </Column>
            <Column  width={200} align="center" >
                <HeaderCell>ΑΦΜ</HeaderCell>
                <Cell dataKey="customersAFM"/>
            </Column>
            <Column  width={200} align="center" >
                <HeaderCell>Τηλέφωνο</HeaderCell>
                <Cell dataKey="customersPhone"/>
            </Column>
            <Column  width={200} align="center" >
                <HeaderCell>Κατηγορία ΕΕΓΦ</HeaderCell>
                <Cell dataKey="categoryName"/>
            </Column>
            <Column  width={200} align="center" >
                <HeaderCell>Τύπος κίνησης</HeaderCell>
                <Cell dataKey="movementType"/>
            </Column>
            <Column  width={200} align="center" >
                <HeaderCell>Αριθμός σειράς</HeaderCell>
                <Cell dataKey="serialNumber"/>
            </Column>
            <Column  width={200} align="center" >
                <HeaderCell>Κατασκευαστής</HeaderCell>
                <Cell dataKey="manufacturer"/>
            </Column>
            <Column  width={200} align="center" >
                <HeaderCell>Εμπορική ονομασία</HeaderCell>
                <Cell dataKey="commercialName"/>
            </Column>
            <Column  width={200} align="center" >
                <HeaderCell>Παλαιότητα (έτη)</HeaderCell>
                <Cell dataKey="age"/>
            </Column>
            <Column  width={200} align="center" >
                <HeaderCell>Δήλωση πιστότητας (πρότυπα, CE)</HeaderCell>
                <Cell dataKey="ceCompliance"/>
            </Column>
            <Column  width={200} align="center" >
                <HeaderCell>Αριθμός δεξαμενών</HeaderCell>
                <Cell dataKey="tanksNumber"/>
            </Column>
            <Column  width={200} align="center" >
                <HeaderCell>Χωρητικότητα δεξαμενής (lt)</HeaderCell>
                <Cell dataKey="totalTanksCapacity"/>
            </Column>
            <Column  width={200} align="center" >
                <HeaderCell>Αριθμός μπεκ</HeaderCell>
                <Cell dataKey="injectorsNumber"/>
            </Column>
            <Column  width={200} align="center" >
                <HeaderCell>Μήκος βραχιόνων (m)</HeaderCell>
                <Cell dataKey="totalArmLength"/>
            </Column>
            <Column  width={200} align="center" >
                <HeaderCell>Ημερομηνία επιθεώρησης</HeaderCell>
                <Cell dataKey="date"/>
            </Column>
            <Column  width={200} align="center" >
                <HeaderCell>Περιφεριακή ενότητα</HeaderCell>
                <Cell dataKey="region"/>
            </Column>
            <Column  width={200} align="center" >
                <HeaderCell>Αριθμός sticker</HeaderCell>
                <Cell dataKey="stickerNumber"/>
            </Column>
            <Column  width={200} fixed="right" align="center" >
                <HeaderCell>Πιστοποιητικό</HeaderCell>
                <Cell>
                {rowData => {
                function view() {
                    window.open("/inspections/" + rowData.inspectionID +"/report","_blank")
                
                }
                return (
                  <span>
                    <a style={{cursor:"pointer"}} onClick={view}> Προβολή </a>
                  </span>
                );
              }}
                </Cell>
            </Column>
        </Table>
        </div>
         

        </>
        
    )
}