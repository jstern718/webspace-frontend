/** External dependencies */

import React from 'react';

// uuid is used to ensure unique ids for looping react components
import { v4 as getId } from 'uuid';

import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';

/** Internal dependencies */

import '../App.css';
import {MyBox, MyListItem, MyType} from '../style';

function Users(props){
    let user = props.props;

    return(
        <MyBox key={getId()}>
            <MyType key={getId()}>
                User Information
            </MyType>
            <List sx={{ mb: 0, pb: .5}}>
                <MyListItem key={getId()}>
                    <ListItemText
                        key={getId()}
                        primary={`User: ... ${user.name}`}
                        sx={{'& .MuiTypography-root':{fontWeight: '600'}}} />
                </MyListItem>
                <MyListItem key={getId()}>
                    <ListItemText
                        key={getId()}
                        primary={`•  Company: ... ${user.customer_company}`}/>
                </MyListItem>
                <MyListItem key={getId()}>
                    <ListItemText
                        key={getId()}
                        primary={`•  User Role: ... ${user.customer_identity}`}/>
                </MyListItem>
                <MyListItem key={getId()}>
                    <ListItemText
                        key={getId()}
                        primary={`•  Address: ...
        ${user.address_num} ${user.address_street} ${user.address_road_type}
        Suite ${user.address_suite}
        ${user.address_city}, ${user.address_state} ${user.address_zip}`}
        sx={{whiteSpace: "pre-wrap" }}/>
                </MyListItem>
                <MyListItem key={getId()}>
                    <ListItemText
                        key={getId()}
                        primary={`•  Tel.: ... ${user.phone}`}/>
                </MyListItem>
                <MyListItem key={getId()}>
                    <ListItemText
                        key={getId()}
                        primary={`•  Password: ... ${user.password}`}/>
                </MyListItem>
                <MyListItem key={getId()}>
                    <ListItemText
                        key={getId()}
                        primary={`•  Email: ... ${user.email}`}/>
                </MyListItem>
            </List>
        </MyBox>
    )
}

export default Users;

