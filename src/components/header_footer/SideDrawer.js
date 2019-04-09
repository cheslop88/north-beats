import React from 'react';
import { scroller } from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {

    const scrollToElement = (element) => {
        scroller.scrollTo(element,{
            duration: 1500,
            delay:100,
            smooth: true,
            offset: -150
        });
        props.onClose(false)
    }

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={()=> props.onClose(false)}
        >
            <List component="nav">
                <ListItem button onClick={()=> scrollToElement('performing')}>
                    Performing
                </ListItem>

                {/*<ListItem button onClick={()=> scrollToElement('venue')}>
                    Venues
                </ListItem>*/}

                <ListItem button onClick={()=> scrollToElement('highlights')}>
                    Highlights
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('pricing')}>
                    Pricing
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('location')}>
                    Location
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('directions')}>
                    Directions
                </ListItem>

                {/*<ListItem button onClick={()=> scrollToElement('headliners')}>
                    Headliners
                </ListItem>*/}

                {/*<ListItem button onClick={()=> scrollToElement('previous')}>
                    North Beats 2018
                </ListItem>*/}

                <ListItem button onClick={()=> scrollToElement('exhibition')}>
                    Exhibition
                </ListItem>

                {/*<ListItem button onClick={()=> scrollToElement('newsletter')}>
                    Newsletter
                </ListItem>*/}

            </List> 
        </Drawer>
    );
};

export default SideDrawer;