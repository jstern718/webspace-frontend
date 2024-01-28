import React from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


/**
 * Component for NavBar
 */
function NavBar(props) {

//   console.log("dashboard props", props)
  let {userState, logoutFunc} = props.props;

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: 'cornflowerblue' }}>
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Webspace Dashboard
                </Typography>
                {({userState})
                 ? <Button color="inherit" onClick={logoutFunc}>Logout</Button>
                 :<Button color="inherit">Login</Button>
                }
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;
