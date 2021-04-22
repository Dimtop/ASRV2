//Data
import inspectionTechnicalReportBC from '../data/inspectionTechnicalReportBC';
import inspectionTechnicalReportNF from '../data/inspectionTechnicalReportNF';
import inspectionTechnicalReportMV from '../data/inspectionTechnicalReportMV';
import findParagraphInTechnicalReport from './findParagraphInTechnicalReport';

export default function retreiveInspectionResult(inspection,category){


    var result = 0;
    var categories = [];
    var technicalReport = null
    switch(category.code){
        case "bc":
            technicalReport = inspectionTechnicalReportBC;
            break;
        case "nf":
            technicalReport = inspectionTechnicalReportNF;
            break;
        case "mv":
            technicalReport = inspectionTechnicalReportMV;
            break;
        default:
            technicalReport = inspectionTechnicalReportBC;
            break;

    }
    for(const [key, value] of Object.entries(inspection.technicalReport)){
        if(!value){

            if(findParagraphInTechnicalReport(technicalReport,key).category=="2"){
                if(result != 2){
                    result = 1;
                    categories.push(key);
                }
        
            }else{
                result = 2;
                categories.push(key);

            }
        }
    }

    console.log(inspection.measurements)
    for(const [key, value] of Object.entries(inspection.measurements)){
        if(!value.result){
            result = 2;
            categories.push(key);
            
        }
    }

    if(inspection.inadequateCategory){
        result = 3;
    }

    return {result,categories}
 
}