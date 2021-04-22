import React, {useState,useEffect} from 'react'

//Styles
import "../../../styles/inspection/report/report.css"


export default function ReportTechnicalReport(props){



    return(
        <>
 
        {
        props.technicalReport.map((e,i)=>{
                 
            return(
                <>

      
                        {
                            e.type!="measurement"?
                            !hasParagraphs(e)?
                            <>
                            <tr>
                                <td className="inspectionReportTD">{e.code +" " +e.title}</td>
                                <td className="inspectionReportTD">{props.inspection.technicalReport[e.code.replaceAll(".","_")].result?"ΝΑΙ":"ΟΧΙ"}</td>
                                <td className="inspectionReportTD">{e.category=="3"?"Σημαντικές (ΚΑΤ. ΙΙΙ)":e.category=="2"?"(Ήσσονες (ΚΑΤ. ΙΙ)":""}</td>
                                <td className="inspectionReportTD">{props.inspection.technicalReport[e.code.replaceAll(".","_")].notes}</td>
                            </tr>
                            </>
                            :
                            <>
                            <tr style={{backgroundColor:"lightgray"}}>
                                <td className="inspectionReportTD"><b>{e.code +" " +e.title}</b></td>
                                <td className="inspectionReportTD"></td>
                                <td className="inspectionReportTD"></td>
                                <td className="inspectionReportTD"></td>
                            </tr>
                            {
                                (hasParagraphs(e)&&e.type!="measurement" && <ReportTechnicalReport inspection={props.inspection} technicalReport={e.paragraphs}/>)
                            }
                           
                            </>
                            :<></>
                        }   
                 
                                                                
                            
                </>
            
            )
        })
        }

    </>  
    
    )
}

function hasParagraphs(e){
 
    return e.paragraphs.length>0;
}