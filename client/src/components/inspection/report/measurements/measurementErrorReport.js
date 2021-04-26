import React, {useState,useEffect} from 'react'


export default function MeasurementErrorReport(props){
    


    return(
        props.measurement.result?
        <p style={{color:'red'}}><b>Αποτέλεσμα: </b>Επιτυχής μέτρηση</p>
        :
        <p style={{color:'red'}}><b>Αποτέλεσμα: </b>Βρέθηκε αποκλίνουσα μέτρηση</p>
    )
}