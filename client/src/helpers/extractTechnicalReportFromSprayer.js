import technicalReportNF from '../data/inspectionTechnicalReportNF'
import technicalReportBC from '../data/inspectionTechnicalReportBC';
import technicalReportMV from '../data/inspectionTechnicalReportMV'
import extractCategoryFromSprayer from './extractCategoryFromSprayer'


export default function extractTechnicalReportFromSprayer(sprayer,categories){
    var category = extractCategoryFromSprayer(sprayer,categories);

    switch(category.code){
        case "bc":
            return technicalReportBC;
        case "nf":
            return technicalReportNF;
        case "mv":
            return technicalReportMV;
        default:
            return technicalReportBC;
    }
}