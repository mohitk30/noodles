import React from 'react'
import AppBar from '@mui/material/AppBar';
 
import Toolbar from '@mui/material/Toolbar';
 
import Typography from '@mui/material/Typography';
 
 
import Container from '@mui/material/Container';
 

export default function Navbarn(){

    return (<>
    
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Noodles
          </Typography>

           
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Noodles
          </Typography>
           
        </Toolbar>
      </Container>
    </AppBar>
    
    
    
    </>)

}