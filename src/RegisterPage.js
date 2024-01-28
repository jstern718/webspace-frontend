import React, { useState } from "react";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function RegisterPage(props) {

    // console.log("RegisterPage runs ...");
    console.log("props", props);


    const { register } = props.props.props;

    const [formData, setFormData] = useState(null);
    // const [formErrors, setFormErrors] = useState([]);
    console.log("formData", formData);

    /**
     * Saves form data on user input changes
     */
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(oldData => ({ ...oldData, [name]: value }));

    }

    /**
     * Submits form information and calls login from parent component
     */

    async function handleSubmitRegister(evt) {
        evt.preventDefault();
        formData["name"] = "users";
        register(formData);
    }

    return (

      <Container component="main" maxWidth="xs"
        sx={{
            borderColor:'gray',
            borderStyle: 'solid',
            borderWidth: '2px',
            borderRadius: '2%',
            marginTop: '3%',
            paddingBottom: '4%'
        }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, ml: 4, bgcolor: 'white', color: 'gray', borderColor:'gray', borderStyle: 'solid', borderWidth: '2px'  }}>
            <LockOpenIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmitRegister} onChange={handleChange} noValidate sx={{ mt: 1, ml: 3, mr: 3}}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="Username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container sx={{
                    flexDirection: 'column',
                    alignItems: 'center',}}>
                <Grid item >
                    <Link href="http://localhost:3000/login" variant="body2"  >
                        {"Have an account? Sign In"}
                    </Link>
                </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    );
}

export default RegisterPage;