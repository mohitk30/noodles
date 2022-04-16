import React from 'react'
import AppBar from '@mui/material/AppBar';
 
import Toolbar from '@mui/material/Toolbar';
 
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
 
import Container from '@mui/material/Container';
 

export default function Navbarc(){

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
          < Link to = "/" 
          style={{textDecoration:'none',
           color:'white'}}
          >
          <Typography
            variant="span"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Countries
          </Typography>
          </Link>  
           
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Noodles
          </Typography>



          < Link to = "/" 
          style={{textDecoration:'none',
           color:'white'}}
          >
          <Typography
            variant="span"
            noWrap
            component="div"
            sx={{   display: { xs: 'flex', md: 'none' } }}
          >
            Countries
          </Typography>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
    
    
    
    </>)

}