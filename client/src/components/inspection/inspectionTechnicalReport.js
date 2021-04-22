import React, {useState,useEffect} from 'react'

//Components
import {Alert,Grid,Row,Col,Panel,Button,Toggle,Input} from 'rsuite';

//Styles
import "../../styles/main.style.css"




export default function InspectionTechnicalReport(props){




    return (
        <>
       
            {
                props.technicalReport.map(e=>{
                 
                    return(
                        <>
                        
                                            
                                {
                                    e.type!="measurement"?
                                    !hasParagraphs(e)?
                                    <>
                                    <Col xs={24} md={24} key={e.code}>
                                    <Panel header={e.code + ". " + e.title} zcollapsible  bordered className="withMarginTopAndBot">
                                        <p>Ικανοποίηση απαιτήσεων</p>
                                        <Toggle checkedChildren="ΝΑΙ" unCheckedChildren="ΟΧΙ" checked={props.inspection.technicalReport[e.code.replaceAll(".","_")].result} onChange={(value)=>props.setInspection({...props.inspection,technicalReport:changeInspectionTechnicalReportResult(props.inspection,e.code,value)})}/>
                                        <p>Παρατηρήσεις</p>
                                        <Input type="text" value={props.inspection.technicalReport[e.code.replaceAll(".","_")].notes} onChange={(value)=>props.setInspection({...props.inspection,technicalReport:changeInspectionTechnicalReportNotes(props.inspection,e.code,value)})}/>
                                    </Panel>
                                    </Col>
                                    </>
                                    :
                                    <Col xs={24} md={24} key={e.code}>
                                        <Panel header={e.code + ". " + e.title} collapsible  bordered className="withMargin">
                                        {(hasParagraphs(e)&&e.type!="measurement" && <InspectionTechnicalReport inspection={props.inspection} setInspection={props.setInspection} technicalReport={e.paragraphs}/>)}
                                        </Panel>
                                    </Col>
                                    :<></>
                                }     
                                                                        
                                    
                        </>
                    
                    )
                })
            }
        
        </>
    );
}


function hasParagraphs(e){
 
    return e.paragraphs.length>0;
}

function changeInspectionTechnicalReportResult(inspection,code,value){
    inspection.technicalReport[code.replaceAll(".","_")].result = value;
    console.log(inspection.technicalReport)
    return {...inspection.technicalReport}
}

function changeInspectionTechnicalReportNotes(inspection,code,value){
    inspection.technicalReport[code.replaceAll(".","_")].notes = value;
    console.log(inspection.technicalReport)
    return {...inspection.technicalReport}
}