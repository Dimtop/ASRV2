import inspectionTechnicalReportBCModel from './inspectionTechnicalReportBC.model';
import inspectionTechnicalReportNFModel from './inspectionTechnicalReportNF.model';
import inspectionTechnicalReportMVModel from './inspectionTechnicalReportMV.model';

import inspectionMeasurementsBCModel from './inspectionMeasurementsBC.model';
import inspectionMeasurementsNFModel from './inspectionMeasurementsNF.model';
import inspectionMeasurementsMVModel from "./inspectionMeasurementsMV.model"
//Helpers
import initNozzleSuppplyMeasuement from '../helpers/initNozzleSupplyMeasurement'
import initNozzlesDistanceMeasurement from '../helpers/initNozzlesDistanceMeasurement'
import initNozzlesOrientationMeasurement from '../helpers/initNozzlesOrientationMeasurement'
import initPressureMaintenanceUponStopMeasurement from '../helpers/initPressureMaintenanceUponStopMeasurement'
import initPressureDropMeasurement from '../helpers/initPressureDromMeasurement'
import extractCategoryFromSprayer from '../helpers/extractCategoryFromSprayer';

function getInspectionModel(sprayer,category){


    var technicalReport = null;
    var measurements = null;
    console.log(category)
    switch(category.code){
        case "bc":
            technicalReport = inspectionTechnicalReportBCModel;
            measurements = inspectionMeasurementsBCModel
            measurements["9_3_2_a"].values = initNozzleSuppplyMeasuement(sprayer)
            measurements["8_3_1"].values = initNozzlesDistanceMeasurement(sprayer)
            measurements["8_3_2"].values = initNozzlesOrientationMeasurement(sprayer)
            measurements["8_8"].values = initPressureMaintenanceUponStopMeasurement(sprayer)
            measurements["8_9"].values =  initPressureDropMeasurement(sprayer)
            break;
        case "nf":
            technicalReport = inspectionTechnicalReportNFModel;
            measurements = inspectionMeasurementsNFModel;
            measurements["9_3_2_a"].values = initNozzleSuppplyMeasuement(sprayer)
            measurements["9_2"].values = initPressureMaintenanceUponStopMeasurement(sprayer)
            measurements["9_1"].values =  initPressureDropMeasurement(sprayer)
            break;
        case "mv":
            technicalReport = inspectionTechnicalReportMVModel;
            measurements = inspectionMeasurementsMVModel;
            measurements["10_2"].values = initNozzleSuppplyMeasuement(sprayer)
            measurements["8_2_5"].values = initPressureMaintenanceUponStopMeasurement(sprayer)
            measurements["8_2_6"].values =  initPressureDropMeasurement(sprayer)
            break;
        default:
            technicalReport = inspectionTechnicalReportBCModel;
            break;
    }

    //Init


    const inspectionModel = {

        technicalReport:technicalReport,
        measurements:measurements,
        date:new Date(),
        type:"initial",
        inspectionNumber:"0000",
        stickerNumber:"0000",
        inadequateCategory:false,
        result:0
    }

    return inspectionModel
}




export default getInspectionModel;