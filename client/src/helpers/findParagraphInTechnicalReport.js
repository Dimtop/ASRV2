export default function findParagraphInTechnicalReport(technicalReport,paragraph){
    var result = null;
    for(var i=0;i<technicalReport.length;i++){
        if(technicalReport[i].code == paragraph.replaceAll("_",".")){
            return technicalReport[i];
     
        }
        else{
            result = findParagraphInTechnicalReport(technicalReport[i].paragraphs,paragraph)
            if(result){
                return result;
            }
        }
    }
    return result
}