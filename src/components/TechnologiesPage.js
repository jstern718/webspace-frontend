/** External dependencies */

import React from 'react';

// uuid is used to ensure unique ids for looping react components
import { v4 as getId } from 'uuid';

import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';

/** Internal dependencies */

import '../App.css';
import {MyBox, MyListItem, MyType} from '../style';


function Technologies(props){
    let {technologies, technologyObj} = props.props[0];

    return(
        <MyBox key={getId()} >
            <MyType key={getId()}>
                Technologies Used
            </MyType>
            <List key={getId()}>
                {Array.isArray(technologies) && technologies.map((item, index) => (
                    <div key={getId()}>
                        <MyListItem key={getId()}>
                            <ListItemText
                                key={getId()}
                                primary={`•  Id ﹟${item.id}:
        Technology: ... ${item.technology_name}
        Price: ... $${technologyObj[item.technology_name]}`}
                                sx={{whiteSpace: "pre-wrap" }}/>
                         </MyListItem>
                    </div>
                ))}
            </List>
        </MyBox>
    )
}

export default Technologies;