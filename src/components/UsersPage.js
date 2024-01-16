import React from 'react';

// uuid is used to ensure unique ids for looping react components
import { v4 as getId } from 'uuid';

import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';

import '../App.css';
import {MyBox, MyListItem, MyType} from '../style';







function Users(props){
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


{/* <Box sx={{border: 1, borderColor: 'lightgray',
                  borderRadius: 1, m: 1, p: 1}}>
            <Typography variant="h5" gutterBottom sx={{mb:0, pb:0}}>
                User Information
            </Typography>
            <List sx={{ mb: 0, pb: .5}}>
                <ListItem key={`b1`} sx={{ ml: 0, mt: 0, mb:0, pb: 0}}>
                    <ListItemText primary={`User: ... ${customer.name}`}
                        sx={{color: 'rgba(0, 0, 0, 1)', '& .MuiTypography-root':
                        {fontWeight: '600'}}} inset/>
                </ListItem>
                <ListItem key={`b2`} sx={{ ml: 1, pl: 1, mb:0, pb:0}}>
                    <ListItemText primary={`•  Company: ... ${customer.customer_company}`}
                    sx={{color: 'rgba(0, 0, 0, 1)', '& .MuiTypography-root':
                    {fontWeight: '400'}}} inset/>
                </ListItem>
                <ListItem key={`b3`} sx={{ ml: 1, pl: 1, mb:0, pb:0, mt:0, pt: 0}}>
                    <ListItemText primary={`•  User Role: ... ${customer.customer_identity}`}
                    sx={{color: 'rgba(0, 0, 0, 1)', '& .MuiTypography-root':
                    {fontWeight: '400'}}} inset/>
                </ListItem>
                <ListItem key={`b4`} sx={{ ml: 1, pl: 1, mb:0,
                                                pb:0, mt:0, pt: 0,
                                                whiteSpace: "pre-wrap" }}>
                    <ListItemText primary={`•  Address: ...
        ${customer.address_num} ${customer.address_street} ${customer.address_road_type}
        Suite ${customer.address_suite}
        ${customer.address_city}, ${customer.address_state} ${customer.address_zip}`}
                            sx={{color: 'rgba(0, 0, 0, 1)',
                            '& .MuiTypography-root': {fontWeight: '400'}}}
                            inset/>
                </ListItem>
                <ListItem key={`b5`} sx={{ ml: 1, pl: 1, mb:0, pb:0}}>
                    <ListItemText primary={`•  Tel.: ... ${customer.phone}`}
                    sx={{color: 'rgba(0, 0, 0, 1)', '& .MuiTypography-root':
                    {fontWeight: '400'}}} inset/>
                </ListItem>
                <ListItem key={`b6`} sx={{ ml: 1, pl: 1, mb:0, pb:0}}>
                    <ListItemText primary={`•  Password: ... ${customer.password}`}
                    sx={{color: 'rgba(0, 0, 0, 1)', '& .MuiTypography-root':
                    {fontWeight: '400'}}} inset/>
                </ListItem>
                <ListItem key={`b7`} sx={{ ml: 1, pl: 1, mb:0, pb:0}}>
                    <ListItemText primary={`•  Email: ... ${customer.email}`}
                    sx={{color: 'rgba(0, 0, 0, 1)', '& .MuiTypography-root':
                    {fontWeight: '400'}}} inset/>
                </ListItem>
            </List>
        </Box> */}

{/* <ListItem key={getId()} sx={{ ml: 1, pl: 1, mb:0, pb:0, mt:0, pt: 0}}>
                    <ListItemText
                        key={getId()}
                        primary={`•  User Role: ... ${customer.customer_identity}`}
                        sx={{color: 'rgba(0, 0, 0, 1)', '& .MuiTypography-root':
                            {fontWeight: '400'}}} inset/>
                </ListItem> */}