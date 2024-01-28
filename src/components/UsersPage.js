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
    // console.log("users props", props)
    let customer = props.props;

    return(
        <MyBox key={getId()}>
            <MyType key={getId()}>
                User Information
            </MyType>
            <List sx={{ mb: 0, pb: .5}}>
                <MyListItem key={getId()}>
                    <ListItemText
                        key={getId()}
                        primary={`User: ... ${customer.name}`}
                        sx={{'& .MuiTypography-root':{fontWeight: '600'}}} />
                </MyListItem>
                <MyListItem key={getId()}>
                    <ListItemText
                        key={getId()}
                        primary={`•  Company: ... ${customer.customer_company}`}/>
                </MyListItem>
                <MyListItem key={getId()}>
                    <ListItemText
                        key={getId()}
                        primary={`•  User Role: ... ${customer.customer_identity}`}/>
                </MyListItem>
                <MyListItem key={getId()}>
                    <ListItemText
                        key={getId()}
                        primary={`•  Address: ...
        ${customer.address_num} ${customer.address_street} ${customer.address_road_type}
        Suite ${customer.address_suite}
        ${customer.address_city}, ${customer.address_state} ${customer.address_zip}`}
        sx={{whiteSpace: "pre-wrap" }}/>
                </MyListItem>
                <MyListItem key={getId()}>
                    <ListItemText
                        key={getId()}
                        primary={`•  Tel.: ... ${customer.phone}`}/>
                </MyListItem>
                <MyListItem key={getId()}>
                    <ListItemText
                        key={getId()}
                        primary={`•  Password: ... ${customer.password}`}/>
                </MyListItem>
                <MyListItem key={getId()}>
                    <ListItemText
                        key={getId()}
                        primary={`•  Email: ... ${customer.email}`}/>
                </MyListItem>
            </List>
        </MyBox>
    )
}

export default Users;

