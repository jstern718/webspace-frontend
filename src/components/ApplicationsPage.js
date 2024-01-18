/** External dependencies */

import React from 'react';

// uuid is used to ensure unique ids for looping react components
import { v4 as getId } from 'uuid';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

/** Internal dependencies */

import '../App.css';
import {MyBox, MyListItem, MyType} from '../style';
import Helpers from '../util';


function Applications(props){

    let {applications, languages} = props.props[0]


    /** Declare filtered list of languages to establish scope. Cannot
        establish value until mapping languages to applications in jsx,
        when the actual filtering takes place. Will be used multiple
        times if customer has multiple apps. However, declaring inside
        jsx causes error   */

   let filteredLanguages;

    return(
        <div>
            <MyBox key={getId()}>
                <MyType key = {getId()}>
                     Applications
                </MyType>
                {Array.isArray(applications) && applications.map((item, index) => (
                    <div key={getId()}>
                        <List>
                            <MyListItem key={getId()}>
                                <ListItemText primary={`App Name:
                                                       ... ${item.application_name}`}
                                    key={getId()}
                                    sx={{ml: -2, '& .MuiTypography-root':{
                                        fontWeight: '600'}}}/>
                            </MyListItem>
                        </List>
                        <List key={getId()}>
                            <MyListItem key={getId()} sx={{mt: -1.5}}>
                                <ListItemText primary={`•  App Port:
                                                       ... ${item.application_port}`}
                                key={getId()}/>
                            </MyListItem>
                            <MyListItem key={getId()}>
                                <ListItemText primary={`•  App Url:
                                                       ... ${item.application_url}`}
                                key={getId()}/>
                            </MyListItem>
                            <MyListItem key={getId()}>
                                <ListItemText primary={`•  Version No.:
                                                       ...${item.version_num}`}
                                key={getId()}/>
                            </MyListItem>
                            <List key={getId()} sx={{pt:0}}>
                                <MyListItem sx={{mb:-2}}>
                                    <ListItemText primary={`•  Languages used: ...`}
                                    key={getId()}/>
                                </MyListItem>
                                <span className="hide">{
                                    filteredLanguages = Helpers.languageFilter(
                                        languages, item.application_name)}</span>
                                    {filteredLanguages.map(item => (
                                        <ListItem key={getId()}
                                                  sx={{ml: 2, pl: 2, mb:0, pb:0,
                                                        mt:-0.5, pt: 0}}>
                                            <ListItemText primary={item}
                                                          key={getId()}
                                                          sx={{color: 'rgba(0, 0, 0, 1)',
                                                                '& .MuiTypography-root':
                                                             {fontWeight: '350',
                                                              fontSize: '90%'}}}
                                                          inset/>
                                        </ListItem>
                                    ))}
                            </List>
                        </List>
                    </div>
                ))}
            </MyBox>
        </div>
    )
}

export default Applications;