import React, {useState} from 'react';

//Libraries
import {IconButton,Icon} from 'rsuite';

export default function DashboardTile(props){

    return(
        <IconButton appearance="primary" onClick={()=>location.replace(props.option.link)} icon={<Icon icon={props.option.icon}/>}>{props.option.name}</IconButton>
    );
}