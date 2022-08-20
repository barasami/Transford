import * as React from 'react';
import {Paper} from '@mui/material'
import Typography from '@mui/material/Typography';
import {Grid} from '@mui/material';
import {Box} from '@mui/material';
import Mydata from './Mydata';
import { Container} from "@mui/material";


export default function Body() {
  const Data= Mydata.map((data)=>{
    return(
    <Grid item lg={3} sm={6} xs={12} key={data.id} className="myGrid">
       <Paper elevation={10}>
            <img src={data.Image} alt="Transford Chemist" className="img"/>
            <Box padding={1} className="mybox">
                <Typography gutterBottom variant="h5" component="div" sx={{color:'green'}}>
                    {data.Title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data.Description}
                </Typography>
                
            </Box>
        </Paper>

    </Grid>
    )
    
  })

  return (
  <div className='container'>

      <div>
          <h2 className='mytitle'>Why Transford Chemist</h2>
          <Container sx={{ marginY:6  }} >
            <Grid container spacing={3} >
              {Data}
            </Grid>
          </Container>
      </div>
    
    
    
  </div>
  );
}
