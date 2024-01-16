
import React from 'react';

// uuid is used to ensure unique ids for looping react components
import { v4 as getId } from 'uuid';

import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';

import '../App.css';
import {MyBox, MyListItem, MyType} from '../style';
import Helpers from '../util';

function Resources(props){

    let {resource, resourceObj} = props.props[0];

    return(
        <MyBox key={getId()}>
            <MyType key={getId()}>
                Server Resources Used (combined total)
            </MyType>
            <List>
                {Array.isArray(resource) && resource.map((item, index) => (
                    <MyListItem key={getId()}>
                        <ListItemText
                            key={getId()}
                            primary={`•  ${item.resource_name}: ...
        Total Units: ... ${item.resource_amount}
        Price per Unit: ... $${resourceObj[item.resource_name]}
        Total Cost: ... $${Helpers.combinePrice(item.resource_amount,
                                                 resourceObj[item.resource_name]
                                               )}`}
                            sx={{whiteSpace: "pre-wrap" }}/>
                    </MyListItem>
                ))}
            </List>
        </MyBox>

    )
}

export default Resources;