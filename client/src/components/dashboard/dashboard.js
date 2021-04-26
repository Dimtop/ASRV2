import React, {useState} from 'react';
//Styles
import '../../styles/dashboard/dashboard.style.css'
//Libraries
import {Row,Col,IconButton,Icon} from 'rsuite';
import Cookies from 'js-cookie';
//Files
import dashboardConstants from '../../constants/dashboard';
//Components
import DashboardTile from './dashboardTile';
import History from '../utils/history'

export default function Dashboard(){

    //history
    History.push("/dashboard")
    
    function logout(){
        console.log("test")
        Cookies.remove("auth");
        Cookies.remove("userID")
        Cookies.remove("userName")
        location.replace("/")
    }

    return(
        <Row>
            <Col xs={24}>
                <p id="loginInfo">Είστε συνδεδεμένος ως: {Cookies.get("userName")}</p>
            </Col>
            {
                dashboardConstants.options.map(option=>{
                    return( 
                    <Col key={option.name}  xs={24} md={8}>
                        <DashboardTile option={option} />
                    </Col>
                    )
                })
            }
            <Col xs={24} md={8}>
                <IconButton appearance="ghost" icon={<Icon icon="sign-out"/>} onClick={logout}>Αποσύνδεση</IconButton>
            </Col>

        </Row>
    );
}