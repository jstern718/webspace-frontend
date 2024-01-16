
import React from 'react';

// uuid is used to ensure unique ids for looping react components
import { v4 as getId } from 'uuid';

import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';

import '../App.css';
import {MyBox, MyListItem, MyType} from '../style';

function Servers(props){

    let {server, serverObj} = props.props[0];

    return(
        <MyBox key={getId()}>
            <MyType key={getId()}>
                Individual Servers
            </MyType>
            <List key={getId()}>
            {Array.isArray(server) && server.map((item) => (
                <MyListItem key={getId()}>
                    <ListItemText
                        key={getId()}
                        primary={`•  Id ﹟${item.id}:
        Server Name: ... ${item.server_name}
        Price: ... $${serverObj[item.server_name]}`}
                        sx={{whiteSpace: "pre-wrap" }}/>
                </MyListItem>
                ))}
            </List>
        </MyBox>
    )
}

export default Servers;