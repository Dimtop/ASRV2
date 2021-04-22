import React, {useState,useEffect} from 'react';

//Components

import {Drawer} from 'rsuite';
import DashboardTile from '../dashboard/dashboardTile'

//Constants
import dashboardConstants from '../../constants/dashboard';

//Styles
import '../../styles/main.style.css'

export default function Menu(props){

    

    return(
        <>
        <Drawer
            show={props.showMenu}
            onHide={()=>props.setShowMenu(false)}
            placement="left"
            size="xs"
            className="menuDrawer"
        >
            <Drawer.Body>
            <DashboardTile option={{name:"Αρχική",link:"/",icon:"dashboard"}}/>
            {
                dashboardConstants.options.map(option=>{
                    return( 
                
                        <DashboardTile option={option} key={option.name}/>
                 
                    )
                })
            }
            </Drawer.Body>
         
           
        </Drawer>

    </>
    )
 
}