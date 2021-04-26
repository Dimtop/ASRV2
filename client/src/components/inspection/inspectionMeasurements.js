import React, {useState,useEffect} from 'react'


//Components
import PumpSupply from './measurements/pumpSupply'
import PumpVibrations from './measurements/pumpVibrations'
import AirPressure from './measurements/airPressure'
import MeshOpening from './measurements/meshOpening'
import PressureIndicatorPrecision from './measurements/pressureIndicatorPrecision'
import PressureIndicatorDiameter from './measurements/pressureIndicatorDiameter'
import PressureMaintenance from './measurements/pressureMaintenance'
import PressureMaintenanceUponSprayingStop from './measurements/pressureMaintenanceUponSprayingStop'
import NozzleSupply from './measurements/nozzleSupply'
import FlowmeterVolumeRateOfChange from './measurements/flowmeterVolumeRateOfChange'
import ArmSymmetry from './measurements/armSymmetry'
import NozzleDistance from './measurements/nozzlesDistance'
import NozzlesOrientation from './measurements/nozzlesOrientation'
import ArmDistanceVertical from './measurements/armDistanceVertical'
import ArmDistanceHorizontal from  './measurements/armDistanceHorizontal'
import PressureMaintenanceUponStop from './measurements/pressureMaintenanceUponStop'
import PressureDrop from './measurements/pressureDrop'
import NozzlesStandardSetup from './measurements/nozzlesStandardSetup'
import PressureDistribution from './measurements/pressureDistribution'

import {Col} from 'rsuite';

//Helpers
import extractCategoryFromSprayer from '../../helpers/extractCategoryFromSprayer'


export default function InpsectionMeasurements(props){


    const [category,setCategory] = useState({});

    useEffect(()=>{
        console.log("SPRAYER 1")
        console.log(props.sprayer)
        console.log("CATEGORIES")
        console.log(props.categories)
        
        setCategory(extractCategoryFromSprayer(props.sprayer,props.categories))
    },[props.sprayer,props.categories])

    console.log("MODE")
    console.log(category)
    return(
        <>  
            {
                category.code=="bc"?
                <>
                <Col xs={24} md={12}>
                    <PumpSupply inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"2_1_1"}/>
                </Col>
                <Col xs={24} md={12}>
                    <PumpVibrations inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"2_2"}/>
                </Col>
                <Col xs={24} md={12}>
                    <AirPressure inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"2_3_2"}/>
                </Col>
                <Col xs={24} md={24}>
                    <MeshOpening  inspection={props.inspection} setInspection={props.setInspection} paragraph={"4_3_1"}/>
                </Col>
                <Col xs={24} md={24}>
                    <PressureIndicatorPrecision inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"5_2_3"}/>
                </Col>
                <Col xs={24} md={12}>
                    <PressureIndicatorDiameter inspection={props.inspection} setInspection={props.setInspection} paragraph={"5_2_4"}/>
                </Col>
                <Col xs={24} md={12}>
                    <PressureMaintenance inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"5_4_1"}/>
                </Col>
                <Col xs={24} md={12}>
                    <PressureMaintenanceUponSprayingStop inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"5_4_2"}/>
                </Col>
                <Col xs={24} md={24}>
                    <ArmSymmetry inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"8_1_2"}/>
                </Col>
                <Col xs={24} md={24}>
                    <NozzleDistance inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"8_3_1"}/>
                </Col>
                <Col xs={24} md={24}>
                    <NozzlesOrientation inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"8_3_2"}/>
                </Col>
                <Col xs={24} md={24}>
                    <ArmDistanceVertical inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"8_4_1"}/>
                </Col>
                <Col xs={24} md={24}>
                    <ArmDistanceHorizontal inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"8_4_2"}/>
                </Col>
                <Col xs={24} md={24}>
                    <PressureMaintenanceUponStop inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"8_8"}/>
                </Col>
                <Col xs={24} md={24}>
                    <PressureDrop inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"8_9"}/>
                </Col>
                <Col xs={24} md={24}>
                    <NozzlesStandardSetup paragraph={"9_3_1"}/>
                </Col>
                <Col xs={24} md={24}>
                    <NozzleSupply inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"9_3_2_a"}/>
                </Col>
                <Col xs={24} md={24}>
                    <FlowmeterVolumeRateOfChange inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"5_3"} refParagraph={"9_3_2_a"}/>
                </Col>
                <Col xs={24} md={24}>
                    <PressureDistribution inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"9_3_2_b"} refParagraph={"8_9"}/>
                </Col>
                </>
                :
                category.code == "nf"?
                <>
                <Col xs={24} md={12}>
                    <PumpSupply inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"2_1_1"}/>
                </Col>
                <Col xs={24} md={12}>
                    <PumpVibrations inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"2_2"}/>
                </Col>
                <Col xs={24} md={12}>
                    <AirPressure inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"2_3_2"}/>
                </Col>
                <Col xs={24} md={24}>
                    <MeshOpening  inspection={props.inspection} setInspection={props.setInspection} paragraph={"4_3_1"}/>
                </Col>
                <Col xs={24} md={24}>
                    <PressureIndicatorPrecision inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"5_2_3"}/>
                </Col>
                <Col xs={24} md={12}>
                    <PressureIndicatorDiameter inspection={props.inspection} setInspection={props.setInspection} paragraph={"5_2_4"}/>
                </Col>
                <Col xs={24} md={12}>
                    <PressureMaintenance inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"5_4_1"}/>
                </Col>
                <Col xs={24} md={12}>
                    <PressureMaintenanceUponSprayingStop inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"5_4_2"}/>
                </Col>
                <Col xs={24} md={24}>
                    <PressureDrop inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"9_1"}/>
                </Col>
                <Col xs={24} md={24}>
                    <PressureMaintenanceUponStop inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"9_2"}/>
                </Col>
                <Col xs={24} md={24}>
                    <NozzleSupply inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"9_3_2_a"}/>
                </Col>
                <Col xs={24} md={24}>
                    <FlowmeterVolumeRateOfChange inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"5_3"} refParagraph={"9_3_2_a"}/>
                </Col>
                <Col xs={24} md={24}>
                    <PressureDistribution inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"9_3_2_b"} refParagraph={"9_1"}/>
                </Col>
                <Col xs={24} md={24}>
                    <NozzlesStandardSetup paragraph={"9_3_3"}/>
                </Col>
                </>
                :
                category.code =="mv"?
                <>
                <Col xs={24} md={12}>
                    <PumpSupply inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"2_1_2_a"}/>
                </Col>
                <Col xs={24} md={12}>
                    <PumpVibrations inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"2_2"}/>
                </Col>
                <Col xs={24} md={12}>
                    <AirPressure inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"2_3_2"}/>
                </Col>
                <Col xs={24} md={24}>
                    <MeshOpening  inspection={props.inspection} setInspection={props.setInspection} paragraph={"4_3_1"}/>
                </Col>
                <Col xs={24} md={12}>
                    <PressureIndicatorDiameter inspection={props.inspection} setInspection={props.setInspection} paragraph={"5_2_4"}/>
                </Col>
                <Col xs={24} md={24}>
                    <PressureIndicatorPrecision inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"5_2_6"}/>
                </Col>
                <Col xs={24} md={12}>
                    <PressureMaintenance inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"5_4_1"}/>
                </Col>
                <Col xs={24} md={12}>
                    <PressureMaintenanceUponSprayingStop inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"5_4_2"}/>
                </Col>
                <Col xs={24} md={24}>
                    <ArmDistanceVertical inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"8_2_1_b"}/>
                </Col>
                <Col xs={24} md={24}>
                    <ArmDistanceHorizontal inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"8_2_1_c"}/>
                </Col>
                <Col xs={24} md={24}>
                    <NozzleDistance inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"8_2_2_b"}/>
                </Col>
                <Col xs={24} md={24}>
                    <NozzlesOrientation inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"8_2_2_c"}/>
                </Col>
                <Col xs={24} md={24}>
                    <PressureMaintenanceUponStop inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"8_2_5"}/>
                </Col>
                <Col xs={24} md={24}>
                    <PressureDrop inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"8_2_6"}/>
                </Col>
                <Col xs={24} md={24}>
                    <NozzleSupply inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"10_2"}/>
                </Col>
                <Col xs={24} md={24}>
                    <FlowmeterVolumeRateOfChange inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"5_3"} refParagraph={"10_2"}/>
                </Col>
                <Col xs={24} md={24}>
                    <PressureDistribution inspection={props.inspection} setInspection={props.setInspection} sprayer={props.sprayer} paragraph={"10_3_2"} refParagraph={"8_2_6"}/>
                </Col>
                </>
                :
                <></>
              
            }

        </>

    );
}