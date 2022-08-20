import React from "react";
import {Paper} from '@mui/material'
import Typography from '@mui/material/Typography';
import {Grid} from '@mui/material';
import {Box} from '@mui/material';
import { Container} from "@mui/material";
import Pharmaceuticals from "./Pharmaceuticals";


export default function Product()
{
    const myData= Pharmaceuticals.map((data)=>{
        return(
        <Grid item lg={3} sm={6} xs={12} key={data.id} className="myGrid">
           <Paper elevation={10}>
                <img src={data.image} alt="Transford Chemist" className="img"/>
                <Box padding={1} className="myboxes">
                    <Typography gutterBottom variant="h5" component="div" sx={{color:'green'}}>
                        {data.class}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.description}
                    </Typography>
                    
                </Box>
            </Paper>
    
        </Grid>
        )
        
      })
    return(
        <div>
            <div className="Bannertwo">
                <p className="Bannertwotext">
                    We are dedicated to ensuring you get quality medicines
                </p>
                
            </div>
            <p className="mytitles">We have all that customers need</p>

            <Container sx={{ marginY:6  }}  >
                <Grid container spacing={3} >
                    {myData}
                </Grid>
            </Container>
         
        </div>
    )
}